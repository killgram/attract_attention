import { Request, Response } from "express";
import { ImageService } from "../services";

const getImages = async (req: Request, res: Response) => {
  const config = await ImageService.getImageLink();

  res.status(200).send({
    data: config,
    success: true,
  });
};

export { getImages };
