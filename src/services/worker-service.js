// Here we will add job data into queue
const { emailQueueService } = require("./queue-service");

// we can also create more workers as the as more queue service
exports.pushIntoEmailQueue = (jobData) => {
  return new Promise((resolve, reject) => {
    // providing job option to queue for particular job for auto retry failed job
    // attempts means job will attemted as value we pass in attempts
    // backoff means job will retried at the interval of backoff time(in ms) until
    // it finish, if job is not finished with in the max attempts defined
    // it will kept as failed
    const jobOption = {
      attempts: 5,
      backoff: 5000,
    };

    emailQueueService

      .add(jobData, jobOption)
      .then((job) => {
        resolve(job);
        // console.log(job.id);
        //jon added into queue successfully
        // return Promise.resolve("Jon added into queue");
      })
      .catch((err) => {
        // error occured in adding into queue
        reject(err);
      });
  });
};
