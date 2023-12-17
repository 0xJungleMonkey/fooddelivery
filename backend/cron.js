const cron = require("cron");
const https = require("https");
// Replace 'YOUR_BACKEND_URL' with the actual URL of your backend service
const backendUrl = "https://quickbite-htqe.onrender.com";
const job = new cron.CronJob("*/12 * * * * ", function () {
  console.log(`restarting server`);
  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log(`Server started`);
      } else {
        console.log(
          `failed to restart server with status code: ${res.statusCode}`
        );
      }
    })
    .on("error", (err) => {
      console.error(`error during restart:`, err.message);
    });
});

module.exports = job;
