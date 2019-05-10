const schedule = require('node-schedule');

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var x = function (b) {
  return b
};

var y = function() { 
  console.log("lolonator");
}

var log = function (job, num, time) {
  console.log('Job ' + job + ' -- #' + num + ' -- executed at: ' + time);
};


function main() {
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
      // console.log('Job ' + arr[i][0] + ' -- #' + arr[i][2] + ' -- executed at: ' + arr[i][1]);
      log(arr[i][0], arr[i][2], arr[i][1])
      
      console.log(x(arr[i][0]));
      
      y();    
    }.bind(null, [x, log, y]));

    objArr.push([i, job])
    //  console.log("object");
  }

  // console.log(schedule.scheduledJobs)
}

main()
