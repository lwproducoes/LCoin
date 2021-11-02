import request from "supertest";
import server from "../routes";

test("Blockchain is online ?", () => {
  request(server)
    .get("/")
    .then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ message: "OK" });
    });
});
