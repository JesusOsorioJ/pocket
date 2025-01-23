import axios, { AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export interface Message {
  sender: string;
  content: string;
  createdAt: number;
}

export const getAllMessages = async (): Promise<AxiosResponse<Message[]> | null> => {
  try {
    const response = await axios.get(`${baseURL}/api/messages`);
    return response;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return null;
  }
};

export const newMessage = async (content: string): Promise<AxiosResponse<Message> | null> => {
  try {
    const response = await axios.post(`${baseURL}/api/messages`, { content });
    return response;
  } catch (error) {
    console.error("Error sending message:", error);
    return null;
  }
};

export const deleteMessages = async (): Promise<AxiosResponse<void> | null> => {
  try {
    const response = await axios.delete(`${baseURL}/api/messages`);
    return response;
  } catch (error) {
    console.error("Error deleting messages:", error);
    return null;
  }
};
