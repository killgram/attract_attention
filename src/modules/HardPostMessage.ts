import { Request, Response } from "express";
import { AttractAttentionBot } from "../bots";
import { FirebaseService } from "../services";

const hardPostMessage = async (req: Request, res: Response) => {
  const config = await FirebaseService.getConfigService();
  await AttractAttentionBot.sendViaBot(config?.chat_id);

  res.status(200).send({
    title: "Successful",
    success: true,
  });
};

export { hardPostMessage };
