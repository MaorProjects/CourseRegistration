import { Request, Response } from "express";
import Service from "./service";
import CourseInput from "../../Types/CourseInput";

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Service.getAllCourses();
    res.json(courses);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const createCourse = async (req: Request, res: Response) => {
  try {
    const courseInput: CourseInput = {
      name: req.body.courseName,
      date: req.body.courseDate,
      info: req.body.info,
    };
    const course = await Service.createCourse(courseInput);
    res.json(course);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const createDate = async (req: Request, res: Response) => {
  try {
    const courseId: number = Number(req.params.id);
    const date: Date = new Date(req.body.date);
    const courseDate = await Service.createDate(date, courseId);
    res.json(courseDate);
  } catch (error) {
    console.error("Error:", error);
  }
};
