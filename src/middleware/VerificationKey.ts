import { Request, Response, NextFunction } from "express";
import { Keys } from "../configuration";

const verificationKey = (req: Request, res: Response, next: NextFunction) => {
  const { key } = req.body;
  if (!key) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  } else if (key !== Keys.ACCESS_KEY) {
    return res.status(200).send({
      title: "Forbidden, go away",
      success: false,
    });
  } else {
    next();
  }
};

export { verificationKey };
