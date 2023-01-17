// Here we will add job data into queue
const { emailQueueService } = require("./queue-service");

// we can also create more workers as the as more queue service
exports.pushIntoEmailQueue = (jobData) => {
  emailQueueService
    .add(jobData)
    .then(() => {
      //jon added into queue successfully
      return Promise.resolve("Jon added into queue");
    })
    .catch((err) => {
      // error occured in adding into queue
      return Promise.reject(err);
    });
};
