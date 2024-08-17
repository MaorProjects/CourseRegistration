import { Request, Response } from "express";
import Service from "./service";

//system support only 1 use
const userId = 1;

export const getTakenCourses = async (req: Request, res: Response) => {
  try {
    const takenCourses = await Service.getTakenCourses(userId);
    res.json(takenCourses);
  } catch (err) {
    return res.send(err);
  }
};

export const createTakenCourses = async (req: Request, res: Response) => {
  try {
    const takenCourseIds = req.body.ids;
    await Service.createTakenCourses(takenCourseIds, userId);
    res.json(takenCourseIds);
  } catch (err) {
    return res.send(err);
  }
};

export const deleteTakenCourse = async (req: Request, res: Response) => {
  try {
    const courseDateId = Number(req.params.id);
    const deletedcourse = await Service.deleteTakenCourse(userId, courseDateId);
    res.json(deletedcourse);
  } catch (err) {
    return res.send(err);
  }
};
