import { Request, Response } from "express";
import { TitleService } from "../services";

const getTitle = async (req: Request, res: Response) => {
  const config = await TitleService.getTitleService();

  res.status(200).send({
    data: config,
    success: true,
  });
};

export { getTitle };
