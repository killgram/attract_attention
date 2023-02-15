import { Request, Response } from "express";
import { ImageService } from "../services";

const changeImages = async (req: Request, res: Response) => {
  const { link, total } = req.body;

  await ImageService.changeImagesService(link, total);

  res.status(200).send({
    title: "Successful",
    success: true,
  });
};

export { changeImages };
