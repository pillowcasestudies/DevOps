const request = require("supertest");
const express = require("express");

const app = express();
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

describe("Health Check API", () => {
  it("should return status 200 and a JSON response", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "ok");
    expect(res.body).toHaveProperty("message", "Server is running");
  });
});