import { Request, Response } from "express";

const getWorkStatus = (req: Request, res: Response) => {
  res.status(200).send({
    title: "Attract attention is working correctly",
    success: true,
  });
};

export { getWorkStatus };
