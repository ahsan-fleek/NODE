import dotenv from "dotenv";
dotenv.config();

const { PORT, MONOGODB_CONNECTION_STRING } = process.env;

if ( !PORT || !MONOGODB_CONNECTION_STRING ) {
  throw new Error("❌ Missing required environment variables");
}

export { PORT,  MONOGODB_CONNECTION_STRING };
