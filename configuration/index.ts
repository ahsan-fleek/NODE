import dotenv from "dotenv";
dotenv.config();

const {
  PORT,
  MONOGODB_CONNECTION_STRING,
  CORS_ORIGIN,
  JWT_SECRET,
  JWT_EXPIRES_IN
} = process.env;


if (!PORT || !MONOGODB_CONNECTION_STRING || !CORS_ORIGIN || !JWT_SECRET || !JWT_EXPIRES_IN) {
  throw new Error("Missing required environment variables");
}

export {
  PORT,
  MONOGODB_CONNECTION_STRING,
  CORS_ORIGIN,
  JWT_SECRET,
  JWT_EXPIRES_IN
};
