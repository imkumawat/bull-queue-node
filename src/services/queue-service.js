const bull = require("bull");

// Queue name: "emailQueue"
// Using local redis config
// we can also create multiple queue service for
// different task and export from here

exports.emailQueueService = new bull("emailQueue", {
  host: "127.0.0.1",
  port: 6379,
});
