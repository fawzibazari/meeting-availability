var meetings = [
  {
    meeting: "one",
    start_time: "07:15:00",
    end_time: "08:58:00",
  },
  {
    meeting: "two",
    start_time: "09:00:00",
    end_time: "21:13:00",
  },
  { meeting: "three", start_time: "22:15:00", end_time: "23:59:00" },
];

function subtractMinute(time) {
  var h = +time.substr(0, 2);
  var m = +time.substr(3, 2);
//   console.log(m);

  if (m > 0) {
    m -= 1;
    // console.log(m);
  } else {
    if (h > 0) {
      h -= 1;
    } else {
      return false;
    }
    m = 59;
  }

  if (h < 10) h = "0" + h;

  if (m < 10) m = "0" + m;
  // console.log(m);

  return h + ":" + m + ":00";
}

function addMinute(time) {
  var h = +time.substr(0, 2);
  var m = +time.substr(3, 2);

  if (m < 59) {
    m += 1;
    console.log(m);
  } else {
    // console.log(h);
    if (h < 22) {
      h += 1;
    } else {
      return false;
    }
    m = 0;
  }

  if (h < 10) h = "0" + h;

  if (m < 10) m = "0" + m;

  return h + ":" + m + ":00";
}

//If meetings is already sorted by time
//you can skip this next bit of code
meetings.sort(function(a, b) {
  return a.start_time > b.start_time ? 1 : -1;
});

var schedule = [];
var start_time = "00:00:00";
var end_time = "23:59:00";
for (var i = 0, l = meetings.length; i < l; i++) {
  end_time = subtractMinute(meetings[i].start_time);
//   console.log(end_time);
  // console.log(meetings[i].start_time);
  if (i) start_time = addMinute(meetings[i - 1].end_time);
    // console.log(start_time);

  //free time start
  //   console.log(start_time);
//   console.log("e" + meetings[i - 1]?.end_time);
//   console.log("s" + meetings[i].start_time);
console.log(meetings[i - 1]?.end_time);
// console.log( meetings[i].start_time);
  if (
    (end_time && !i) ||
    (end_time && i && meetings[i - 1].end_time < meetings[i].start_time && start_time <= end_time)
  )
//   console.log(start_time);
    schedule.push({
      meeting: "free time",
      start_time: start_time,
      end_time: end_time,
    });

  schedule.push(meetings[i]);

  if (i + 1 === l) {
    start_time = addMinute(meetings[i].end_time);
    // console.log(start_time);

    if (start_time)
      schedule.push({
        meeting: "free time",
        start_time: start_time,
        end_time: "23:59:00",
      });
  }
}

console.log(schedule);
