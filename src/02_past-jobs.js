const schedule = require('node-schedule');

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

let start = new Date()
let end = new Date()
start.setMinutes(start.getMinutes() - 35) // set job 35 Minutes in the past
end.setMinutes(end.getMinutes() - 10) // set job 10 Minutes in the past

/**
 * Create Scheduler
 */
let arr = []
const numb_jobs = 50
for (let i = 0; i < numb_jobs; i++) {
  let d = randomDate(start, end)
  let now = new Date()

  if (d < now) {
    arr.push([i, now])
  }

  schedule.scheduleJob(arr[i][1], function () {
    console.log('Job  -- #' + arr[i][0] + ' -- executed at: ' + arr[i][1]);
  });
}
