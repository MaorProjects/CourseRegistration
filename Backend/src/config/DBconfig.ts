import { DataSource } from "typeorm";

export const connectDB = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "Maor1234",
  database: "coursesDB",
  logging: true,
  synchronize: false,
  entities: ["./dist/Entities/*.js"],
});
