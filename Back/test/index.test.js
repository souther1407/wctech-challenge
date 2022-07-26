const app = require("../app.js");
const test = require("supertest");
const assert = require("assert");
const { OK, INVALID } = require("../utils/httpCodes");


describe("GET /iecho?text=test", () => {
    it("response with a json", () => {
        return test(app)
                .get("/iecho?text=test")
                .expect(OK)
                .expect("Content-Type", /json/)
                .expect((res) => {
                   assert.deepStrictEqual(res.body, { text: "tset", palindrome: false });
                })
    })
    it("response with a json and is a palindrome", () => {
        return test(app)
                .get("/iecho?text=neuquen")
                .expect(OK)
                .expect("Content-Type", /json/)
                .expect((res) => {
                   assert.deepStrictEqual(res.body, { text: "neuquen", palindrome: true });
                })
    })
    it("response with a json and is not a text", () => {
        return test(app)
                .get("/iecho?text={{{}}")
                .expect(INVALID)
                .expect("Content-Type", /json/)
                .expect((res) => {
                   assert.deepStrictEqual(res.body, { text: "no text" });
                })
    })
})