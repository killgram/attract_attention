import { Request, Response } from "express";
import { TitleService } from "../services";

const changeTitle = async (req: Request, res: Response) => {
  const { appeal } = req.body;

  await TitleService.changeTitleService(appeal);

  res.status(200).send({
    title: "Successful",
    success: true,
  });
};

export { changeTitle };
