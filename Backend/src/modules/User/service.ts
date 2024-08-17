import { connectDB } from "../../config/DBconfig";
import { User } from "../../Entities/User";

const usersRepository = connectDB.getRepository(User);

export default class Service {
  static getOneById = async (id: number) => {
    const user = await usersRepository.findOneBy({ id });
    return user;
  };

  static createUser = async () => {
    const newUser = {
      firstName: "מאור",
      lastName: "משה",
      birthday: new Date("2000-05-15"),
      email: "maorha101@gmail.com",
      phoneNumber: "052-3393592",
    };
    return usersRepository.save(newUser);
  };
}
