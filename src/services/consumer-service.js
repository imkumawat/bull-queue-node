exports.emailQueueConsumer = async (job) => {
  //Write here your business logic
  console.log("Received job");
  console.log("Here is job id:\n", job.id);

  // for failed jobs use
  //done("error-in-processing", null);
  // for success job use
  // done(null, "completed-status");

  // we have jon data as josn body {name: "node"}
  // so we console the name from job data
  console.log("Here is job data:\n", job.data.name);
  //done(null, "job completed");

  // Using promises to full fill job
  // Do not use callback function "done" when using promises
  // simply use resolve or reject to tell job is finished or failed
  try {
    return Promise.resolve("finished");
    // throw new Error("Missing params of job");
  } catch (err) {
    return Promise.reject(err);
  }
};
