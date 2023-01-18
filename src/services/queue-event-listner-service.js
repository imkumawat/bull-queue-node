// Here we will pick job from job queue and perform
// required actions on that and monitor the job status
// We must import this file into the main file (app.js index.js server.js etc)
// where node command is used so that consumers will run into process
const { emailQueueService } = require("./queue-service");
const { emailQueueConsumer } = require("./consumer-service");

emailQueueService.process(emailQueueConsumer);

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
