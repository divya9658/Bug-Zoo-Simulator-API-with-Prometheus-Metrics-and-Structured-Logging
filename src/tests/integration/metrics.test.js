const request = require("supertest");
const app = require("../../main/server");

describe("GET /metrics", () => {

    test("should return prometheus metrics", async () => {

        const res = await request(app)
            .get("/metrics");

        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("events_generated_total");

    });

});