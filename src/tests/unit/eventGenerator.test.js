const generateEvent = require("../../engine/simulator/eventGenerator");

describe("Event Generator", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("should generate INFO event", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.5);

        const event = generateEvent();

        expect(event.severity).toBe("INFO");
        expect(event).toHaveProperty("id");
        expect(event).toHaveProperty("timestamp");
        expect(event).toHaveProperty("animal");
        expect(event).toHaveProperty("message");
    });

    test("should generate WARN event", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.8);

        const event = generateEvent();

        expect(event.severity).toBe("WARN");
    });

    test("should generate ERROR event", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.95);

        const event = generateEvent();

        expect(event.severity).toBe("ERROR");
    });

});