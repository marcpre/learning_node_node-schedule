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
let objArr = []
const numb_jobs = 50
for (let i = 0; i < numb_jobs; i++) {
  d = randomDate(start, end)
  arr.push([i, d, "undone"])

  console.log('Job ' + arr[i][0] + ' -- #' + arr[i][2] + ' -- scheduled at: ' + arr[i][1]);
  
  let job = schedule.scheduleJob(arr[i][1], function () {
    arr[i][2] = "done"
    console.log('Job ' + arr[i][0] + ' -- #' + arr[i][2] + ' -- executed at: ' + arr[i][1]);
  });
  
  objArr.push([i, job])
//  console.log("object");
}

// console.log(schedule.scheduledJobs)
