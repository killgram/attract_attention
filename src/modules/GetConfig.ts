import { Request, Response } from "express";
import { FirebaseService } from "../services";

const getConfig = async (req: Request, res: Response) => {
  const config = await FirebaseService.getConfigService();

  res.status(200).send({
    data: config,
    success: true,
  });
};

export { getConfig };
