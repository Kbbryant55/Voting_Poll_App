const express = require("express");
const pollsController = require("../controllers/pollsController");

function routes(Poll) {
  const pollRouter = express.Router();
  const controller = pollsController(Poll);
  pollRouter.route("/polls").get(controller.get).post(controller.post);

  pollRouter.use("/polls/:pollId", (req, res, next) => {
    Poll.findById(req.params.pollId, (err, poll) => {
      if (err) {
        return res.send(err);
      }
      if (poll) {
        req.poll = poll;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  pollRouter
    .route("/polls/:pollId")
    .put((req, res) => {
      const { poll } = req;

      poll.id = req.body.id;
      poll.question = req.body.question;
      poll.options = req.body.options;

      req.poll.save((err) => {
        if (err) {
          return res.send(err);
        }
      });
      return res.json(poll);
    })
    .patch((req, res) => {
      const { poll } = req;
      if (req.body._id) {
        delete req.body._id;
      }
      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        poll[key] = value;
      });
      req.poll.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json(poll);
      });
    })
    .delete((req, res) => {
      req.poll.remove((err) => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });

  return pollRouter;
}

module.exports = routes;
