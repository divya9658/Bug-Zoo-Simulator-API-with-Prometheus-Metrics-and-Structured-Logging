const request = require("supertest");
const app = require("../../main/server");

describe("GET /events", () => {

    test("should return 200", async () => {
        const res = await request(app).get("/events");

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

});

test("should filter ERROR events", async () => {

    const res = await request(app)
        .get("/events?severity=ERROR");

    expect(res.statusCode).toBe(200);

    res.body.forEach(event => {
        expect(event.severity).toBe("ERROR");
    });

});