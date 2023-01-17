const express = require("express");
const route = express.Router();

// importing worker serice to add job into queue
const { pushIntoEmailQueue } = require("../services/worker-service");

route.post("/add-job", async (req, res) => {
  try {
    // write your logic and prepare your job data/object
    // and pass that into worker service

    // we have a json body {name:"node"}
    // we pass this into worker and from consumer we
    // will console the name
    const data = req.body;

    pushIntoEmailQueue(data);

    return res.status(200).send("okay");
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = route;
