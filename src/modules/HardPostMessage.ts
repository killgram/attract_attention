import { Request, Response } from "express";
import { AttractAttentionBot } from "../bots";

const hardPostMessage = async (req: Request, res: Response) => {
  await AttractAttentionBot.sendMessage();

  res.status(200).send({
    title: "Successful",
    success: true,
  });
};

export { hardPostMessage };
