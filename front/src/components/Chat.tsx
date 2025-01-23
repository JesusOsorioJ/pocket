import { format } from "date-fns";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface Message {
  sender: string;
  content: string;
  createdAt: string | number;
}

interface ChatProps {
  data: Message[];
  send: boolean;
}

function Chat({ data, send }: ChatProps) {
  const { t } = useTranslation();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);

  return (
    <div className="bg-gray-200 dark:bg-gray-800 h-90 w-90 p-5 rounded-t-lg max-h-[60vh] overflow-auto">
      {data.length === 0 && !send && (
        <p className="text-center">{t("nothingToShow")}</p>
      )}
      {data.map((d, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            d.sender === "user" ? "items-end" : "items-start"
          }`}
        >
          <p className="font-bold">{d.sender}</p>
          <div className="bg-gray-300 dark:bg-gray-900 p-2 rounded">
            {d.content}
          </div>
          <p className="text-sm">{format(new Date(d.createdAt), "MMMM dd, yyyy pp")}</p>
        </div>
      ))}
      {send && (
        <div className="flex flex-col items-start">
          <div className="flex gap-2 bg-gray-300 dark:bg-gray-900 p-4 rounded">
            <div className="animate-bounce h-2 w-2 rounded-full bg-black dark:bg-white" />
            <div className="animate-bounce h-2 w-2 rounded-full bg-black dark:bg-white" />
            <div className="animate-bounce h-2 w-2 rounded-full bg-black dark:bg-white" />
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Chat;
