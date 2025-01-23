import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import "./config/i18n";
import "./App.css";
import ToggleTheme from "./components/ToggleTheme";
import Language from "./components/Language";
import { deleteMessages, getAllMessages, newMessage } from "./api/comments";
import Chat from "./components/Chat";
import socket from "./config/socket";

interface Message {
  sender: string;
  content: string;
  createdAt: number;
}

function App() {
  const { t } = useTranslation();
  const [comment, setComment] = useState<string>("");
  const [send, setSend] = useState<boolean>(true);
  const [data, setData] = useState<Message[]>([]);

  useEffect(() => {
    socket.on("messages", () => {
      allMessages();
    });

    return () => {
      socket.off("messages");
    };
  }, []);

  useEffect(() => {
    allMessages();
  }, []);

  const allMessages = async () => {
    try {
      const res = await getAllMessages();
      if (res?.data && Array.isArray(res.data)) {
        setData(res.data as Message[]);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setSend(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSend(true);

    try {
      setData((prevData) => [
        ...prevData,
        {
          sender: "user",
          content: comment,
          createdAt: Date.now(),
        },
      ]);
      setComment("");
      await newMessage(comment);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setSend(false);
    }
  };

  const handleDelete = async () => {
    const isConfirmed = window.confirm(t("sureTodelete"));
    if (isConfirmed) {
      setSend(true);
      try {
        await deleteMessages();
        setData([]);
      } catch (error) {
        console.error("Error deleting messages:", error);
      } finally {
        setSend(false);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  return (
    <div className="flex flex-col gap-10 bg-gray-100 dark:bg-gray-700 h-screen w-full p-10 text">
      <div className="flex gap-2">
        <ToggleTheme />
        <Language />
      </div>

      <div className="text-black dark:text-white">
        <div className="flex mb-2">
          <p className="text-center capitalize text-xl font-bold w-full">
            {t("chatWithBot")}
          </p>
          <button
            onClick={handleDelete}
            className="px-1 text-[20px] rounded-br-lg rounded"
          >
            🗑️
          </button>
        </div>
        <Chat data={data} send={send} />
        <form className="flex" onSubmit={handleSubmit}>
          <textarea
            required
            className="w-full p-3 bg-gray-300 dark:bg-gray-900 rounded-bl-lg"
            placeholder={t("writeMessage")}
            onChange={handleChange}
            value={comment}
          />
          <button className="px-5 bg-white text-[22px] rounded-br-lg">
            ✈️
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
