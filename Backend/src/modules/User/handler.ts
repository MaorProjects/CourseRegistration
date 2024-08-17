import { Request, Response } from "express";
import Service from "./service";

//system support only 1 use
const userId = 1;

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await Service.getOneById(userId);
    res.json(user);
  } catch (err) {
    console.error("Error:", err);
  }
};

export const createUser = async () => {
  Service.createUser();
};
