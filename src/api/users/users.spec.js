const request = require("supertest");

const server = require("../../server");
const db = require("../../db/config");

describe("server endpoints", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("POST /users", () => {
    it("should return 200", async () => {
      await request(server)
        .post("/users")
        .send({ username: "timmy", password: "lol" });

      const users = await db("users");

      expect(users).toHaveLength(1);
    });
  });

  describe("", () => {
    it("should return 200", async () => {
      await request(server)
        .post("/")
        .send({ username: "timmy", password: "lol" })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
  });
});
