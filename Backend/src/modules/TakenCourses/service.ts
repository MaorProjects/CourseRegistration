import { User } from "../../Entities/User";
import { connectDB } from "../../config/DBconfig";
import { CourseDate } from "../../Entities/CourseDate";

const courseDateRepository = connectDB.getRepository(CourseDate);
const usersRepository = connectDB.getRepository(User);

export default class Service {
  static getTakenCourses = async (userId: number) => {
    const results = await usersRepository.findOne({
      where: { id: userId },
      relations: ["courseDates", "courseDates.course"],
    });
    const takenCourses = results?.courseDates.map((result) => ({
      id: result.course.id,
      name: result.course.name,
      courseDates: [{ id: result.id, date: result.date }],
      info: result.course.info,
    }));
    return takenCourses;
  };

  static deleteTakenCourse = async (userId: number, courseDateId: number) => {
    const user = await usersRepository.findOne({
      where: { id: userId },
      relations: ["courseDates"],
    });
    if (user) {
      // Find the index of the courseDate in the user's courseDates array
      const courseDateIndex = user.courseDates.findIndex(
        (cd) => cd.id === courseDateId
      );
      if (courseDateIndex !== -1) {
        // Remove the courseDate from the array
        user.courseDates.splice(courseDateIndex, 1);
        // Save the user to persist the changes
        const result = await usersRepository.save(user);
        return result;
      }
    }
  };

  static createTakenCourses = async (takenCourseIds: number[], userId: number) => {
    const user = await usersRepository.findOneBy({ id: userId });
    takenCourseIds.forEach( async takenCourseId => {
      const courseDate = await courseDateRepository.findOneBy({
        id: takenCourseId,
      });
      if (user && courseDate) {
        courseDate.users = [user];
        await courseDateRepository.save(courseDate);
      }
    })
  };
}
