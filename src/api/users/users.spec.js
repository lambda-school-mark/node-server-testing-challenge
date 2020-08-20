const request = require("supertest");

const server = require("../../server");
const db = require("../../db/config");

describe("server endpoints", () => {
  beforeEach(async () => {
    await db("users").truncate();
    await request(server)
      .post("/users")
      .send({ username: "TRUMP", password: "lol" });
  });

  describe("POST /users", () => {
    it("should return 200", async () => {
      await request(server)
        .post("/users")
        .send({ username: "timmy", password: "lol" });

      const users = await db("users");

      expect(users).toHaveLength(2);
    });
  });

  describe("POST /users", () => {
    it("should return 200", async () => {
      await request(server)
        .post("/users")
        .send({ username: "timmy", password: "lol" })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
  });

  describe("DELETE", () => {
    it("should delete user", async () => {
      await request(server)
        .delete("/users/1")
        .then((res) => {
          expect(res.status).toBe(204);
        });
    });
    it("should return content type json", async () => {
      await request(server)
        .post("/users")
        .send({ username: "timmy", password: "lol" })
        .expect("Content-Type", /json/i);
    });
  });
});
