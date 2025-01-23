import prisma from '../../config/prismaLoader';

export enum SenderType {
    user = "user",
    bot = "bot",
 }

type MessageData = {
  sender: SenderType
  content: string;
};

export const getAllMessages = async () => {
  const resp = await prisma.message.findMany();
  return resp;
};

export const newMessage = async (data: MessageData) => {
  const resp = await prisma.message.create({
    data: {
      sender: data.sender,
      content: data.content,
    },
  });
  return resp;
};

export const deleteMessages = async () => {
  const resp = await prisma.message.deleteMany();
  return resp;
};