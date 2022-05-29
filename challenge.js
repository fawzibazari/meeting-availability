var meetings = [
    {
      meeting: "one",
      start_time: "07:15:00",
      end_time: "08:59:00",
    },
  
    {
      meeting: "bla",
      start_time: "09:10:00",
      end_time: "10:13:00",
    },
  
    {
      meeting: "two",
      start_time: "11:00:00",
      end_time: "12:13:00",
    },
  
    { meeting: "three", start_time: "21:15:00", end_time: "23:59:00" },
  ];
  
  function duration(time1, time2) {
    const h1 = time1.substr(0, 2);
    const m1 = time1.substr(3, 2);
    const h2 = time2.substr(0, 2);
    const m2 = time2.substr(3, 2);
    var date1 = new Date(null, null, null, h1, m1);
    var date2 = new Date(null, null, null, h2, m2);
    var dif = date2.getTime() - date1.getTime();
    const res = millisToMinutesAndSeconds(dif);
    return res;
  }
  
  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes;
  }
  
  function addMinute(time) {
    var h = +time.substr(0, 2);
    var m = +time.substr(3, 2);
  
    if (m < 59) {
    } else {
      if (h < 22) {
      } else {
        return false;
      }
      m = 0;
    }
  
    if (h < 10) h = "0" + h;
  
    if (m < 10) m = "0" + m;
  
    return h + ":" + m + ":00";
  }
  
  var schedule = [];
  var start_time = "00:00:00";
  var end_time = "23:59:00";
  let durations;
  for (var i = 0, l = meetings.length; i < l; i++) {
    end_time = meetings[i].start_time;
    if (i) start_time = meetings[i - 1].end_time;
  
    durations = duration(start_time, end_time);
    if (
      (end_time && !i) ||
      (end_time &&
        i &&
        meetings[i - 1].end_time < meetings[i].start_time &&
        start_time <= end_time && durations >= 10)
    )
      schedule.push({
        meeting: "free time",
        start_time: start_time,
        end_time: end_time,
      });
  
    schedule.push(meetings[i]);
    if (i + 1 === l) {
      start_time = addMinute(meetings[i].end_time);
  
      if (start_time)
        schedule.push({
          meeting: "free time",
          start_time: start_time,
          end_time: "23:59:00",
        });
    }
  }
  
  console.log(schedule);
  