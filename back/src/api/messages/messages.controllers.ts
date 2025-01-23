import { Request, Response, NextFunction } from "express";
import * as service from "./messages.services";
import axios from "axios";
import { Server } from "socket.io";

export const getAllMessages = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const messages = await service.getAllMessages();
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

export const newMessage = async (req: Request & { io: Server }, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { content } = req.body;

    // Llamada a la API de OpenAI
    const result = await axios.post(
      "http://pocki-api-env-1.eba-pprtwpab.us-east-1.elasticbeanstalk.com/api/getOpenaiResponse",
      { input: content }
    );

    const userMessage = await service.newMessage({
      sender: service.SenderType.user,
      content,
    });
    await service.newMessage({
      sender: service.SenderType.bot,
      content: result.data.choices[0].message.content,
    });

    const messages = await service.getAllMessages();

    // Emitir evento de actualización
    req.io.of("/updateMessages").emit("messages", messages);
    res.status(201).json(userMessage);
  } catch (error) {
    next(error);
  }
};

export const deleteMessages = async (req: Request  & { io: Server }, res: Response, next: NextFunction): Promise<void> => {
  try {
    await service.deleteMessages();

    // Emitir evento de limpieza
    req.io.of("/updateMessages").emit("messages", []);
    res.status(201).json({ message: "Mensajes eliminados" });
  } catch (error) {
    console.log({error})
    next(error);
  }
};
