import { Context } from "@textile/context";
import { Buckets, Client } from "@textile/hub";
import { Admin } from "@textile/hub-admin";
import dotenv from "dotenv";

// Dot env config setup for testing purposes only
dotenv.config();

const HUB_HOST =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3007"
    : "https://webapi.hub.textile.io";

// Return an admin client connected to prod, staging, or custom (via .env)
const admin = new Admin(
  new Context(process.env.REACT_APP_HUB_HOST ?? HUB_HOST)
);

const buckets = new Buckets(
  new Context(process.env.REACT_APP_HUB_HOST ?? HUB_HOST)
);

const client = new Client(
  new Context(process.env.REACT_APP_HUB_HOST ?? HUB_HOST)
);

export { admin, buckets, client, Context };
