function pollsController(Poll) {
  function post(req, res) {
    const poll = new Poll(req.body);

    if (!req.body.question) {
      res.status(400);
      return res.send("Question is required");
    }
    if (req.body.options?.length < 2) {
      res.status(400);
      return res.send("More than 2 options are required");
    }
    poll.save();
    res.status(201);
    return res.json(poll);
  }
  function get(req, res) {
    Poll.find((err, polls) => {
      if (err) {
        return res.send(err);
      }
      return res.json(polls);
    });
  }
  return { post, get };
}

module.exports = pollsController;
