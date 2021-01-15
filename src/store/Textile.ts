import { Context } from "@textile/context";
import { Admin } from "@textile/hub-admin";
import dotenv from "dotenv";

// Dot env config setup for testing purposes only
dotenv.config();

// Return an admin client connected to localhost.
const admin = new Admin(new Context(process.env.REACT_APP_HUB_HOST));

export { admin };
