const should = require("should");
const sinon = require("sinon");
const pollsController = require("../controllers/pollsController");

describe("Poll Controller Tests:", () => {
  describe("Post", () => {
    it("should not allow an empty question on post", () => {
      const Poll = function (poll) {
        this.save = () => {};
      };

      const req = {
        body: {
          id: "thisIsATestID12345",
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
          ],
        },
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy(),
      };

      const controller = pollsController(Poll);
      controller.post(req, res);

      res.status
        .calledWith(400)
        .should.equal(true, `Bad Status ${res.status.args[0][0]}`);
      res.send.calledWith("Question is required").should.equal(true);
    });
  });
});
