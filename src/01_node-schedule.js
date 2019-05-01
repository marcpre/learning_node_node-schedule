const schedule = require('node-schedule');

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

let start = new Date()
let end = new Date()
end.setSeconds(end.getSeconds() + 20) // add 5 seconds

/**
 * Create Scheduler
 */
let arr = []
const numb_jobs = 50
for (let i = 0; i < numb_jobs; i++) {
  d = randomDate(start, end)
  arr.push([i, d])

  schedule.scheduleJob(arr[i][1], function () {
    console.log('Job  -- #' + arr[i][0] + ' -- executed at: ' + arr[i][1]);
  });
}
