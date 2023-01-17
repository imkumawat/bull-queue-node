// Here we will pick job from job queue and perform
// required actions on that and monitor the job status
// We must import this file into the main file (app.js index.js server.js etc)
// where node command is used so that consumers will run into process
const { emailQueueService } = require("./queue-service");

emailQueueService.process((job, done) => {
  //Write here your business logic
  console.log("Received job");
  console.log("Here is job id:\n", job.id);

  // we have jon data as josn body {name: "node"}
  // so we console the name from job data
  console.log("Here is job data:\n", job.data.name);
  done(null, "job completed");

  // for failed jobs use
  // done("error-in-processing", null);
  // for success job use
  // done(null, "completed-status");
});

emailQueueService.on("completed", (job, result) => {
  // write your business logic if required
  // to do after job complete
  console.log(`Job ${job.id} has completed!`);
  console.log("Here is job result:\n", result);
});

emailQueueService.on("failed", (job, err) => {
  // try to add failed job into queue again
  // and aslo pass the high priority for failed jobs

  console.log(`Job ${job.id} has failed!`);
  console.log("Here is job failed error:\n", err);
});
