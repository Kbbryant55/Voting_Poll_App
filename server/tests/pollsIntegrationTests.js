const should = require("should");
const request = require("supertest");

const mongoose = require("mongoose");

process.env.ENV = "Test";

const app = require("../server.js");

const Poll = mongoose.model("Poll");
const agent = request.agent(app);

describe("Poll CRUD test", () => {
  it("should allow a poll to be posted and return _id", (done) => {
    const pollPost = {
      id: "e4dfbeeaef2",
      question: "Something fun to do? ",
      options: [
        {
          pollOption: "Mini-golf",
          votes: 0,
          _id: "6344b84ca04cea643858032d",
        },
        {
          pollOption: "Kickball",
          votes: 0,
          _id: "6344b84ca04cea643858032e",
        },
        {
          pollOption: "Video games",
          votes: 0,
          _id: "6344b84ca04cea643858032f",
        },
        {
          pollOption: "Beach day",
          votes: 0,
          _id: "6344b84ca04cea6438580330",
        },
      ],
    };

    agent
      .post("/api/polls")
      .send(pollPost)
      .expect(200)
      .end((err, results) => {
        results.body.should.have.property("_id");
        done();
      });

    afterEach((done) => {
      Poll.deleteMany({}).exec();
      done();
    });

    after((done) => {
      mongoose.connection.close();
      app.server.close(done());
    });
  });
});
