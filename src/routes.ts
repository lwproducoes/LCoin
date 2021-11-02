import express from "express";
import { Response, Request } from "express";
const app = express();

app.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ message: "OK" });
});

export default app;
