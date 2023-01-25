import { Request, Response } from "express";
import { FirebaseService } from "../services";

const changeConfig = async (req: Request, res: Response) => {
  const { isWork, start_send, end_send, timeSend, chat_id } = req.body;

  await FirebaseService.changeConfigService({
    isWork,
    start_send,
    end_send,
    timeSend,
    chat_id,
  });

  res.status(200).send({
    title: "Successful",
    success: true,
  });
};

export { changeConfig };
