const express = require("express");
const app = express();
app.use(express.json());

// Adding consumers into process
require("./services/consumer-service");

const jobRoute = require("./routes/job-route");

app.use(jobRoute);
app.get("/", (req, res) => {
  return res.status(200).send("Server is active");
});

app.listen(4000, () => {
  console.log("Server is running");
});
