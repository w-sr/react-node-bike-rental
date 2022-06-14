import { connection } from "mongoose";
import { MongoHelper } from "../helpers/mongoHelpers";
import { encryptPassword } from "../helpers/authHelpers";
import { Bike, User } from "../models";

const mongoHelper = new MongoHelper();
const seed = async () => {
  console.log("Cleanning database");

  await mongoHelper.connectDB();
  await connection.dropDatabase();

  console.log("Database clean");
  const password = await encryptPassword("123456789");

  const user = new User({
    first_name: "Manager1",
    last_name: "Manager1",
    email: "admin@email.com",
    password,
    role: "manager",
  });

  const users = [user];

  const bikes = [
    new Bike({
      model: "Allston",
      color: "white",
      location: "New York",
      rating: 0,
      rented: false,
    }),
    new Bike({
      model: "Fit",
      color: "blue",
      location: "Boston",
      rating: 0,
      rented: false,
    }),
    new Bike({
      model: "Urban",
      color: "red",
      location: "Los Angeles",
      rating: 0,
      rented: false,
    }),
    new Bike({
      model: "Boston",
      color: "pink",
      location: "Austin",
      rating: 0,
      rented: false,
    }),
    new Bike({
      model: "Crosstown",
      color: "green",
      location: "Chicago",
      rating: 0,
      rented: false,
    }),
  ];

  const savings = [
    ...bikes.map((bike) => bike.save()),
    ...users.map((user) => user.save()),
  ];

  await Promise.all(savings);

  console.log("Database seeded");

  connection.close();
};

seed();
