import { Option, Question, Vote } from "../../models";
import { Sequelize } from "sequelize-typescript";
import { config } from 'dotenv';
config();

class DBConnection {
  constructor() {
    console.log('process', process.env.DB_HOST);
    
    const connection = new Sequelize({
      dialect: "postgres",
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      logging: false,
      models: [
        Question,
        Option,
        Vote,
      ],
    });

    (async () => {
      try {
        await connection.sync();
        console.log("db server started");
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    })();
  }
}


export default DBConnection;

