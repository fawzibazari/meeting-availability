var moment = require('moment');

const events = [
    {
        title: "Meeting A",
        start: "2017-02-21T07:00:00-05:00",
        end: "2017-02-21T07:00:00-05:00"
    },
    {
        title: "Meeting B",
        start: "2017-02-21T07:00:00-05:00",
        end: "2017-02-21T07:00:00-05:00"
    },
    {
        title: "Meeting C",
        start: "2017-02-21T07:10:00-05:00",
        end: "2017-02-21T07:30:00-05:00"
    },
    {
        title: "Meeting D",
        start: "2017-02-21T07:45:00-05:00",
        end: "2017-02-21T07:15:00-05:00"
    },
    {
        title: "Meeting E",
        start: "2017-02-21T07:20:00-05:00",
        end: "2017-02-21T07:59:00-05:00"
    },
    {
        title: "Meeting F",
        start: "2017-02-21T07:15:59-05:00",
        end: "2017-02-21T07:00:00-05:00"
    },
    {
        title: "Meeting G",
        start: "2017-02-21T07:45:00-05:00",
        end: "2017-02-21T07:30:00-05:00"
    },
    {
        title: "Meeting H",
        start: "2021-02-21T07:45:00-05:00",
        end: "2022-02-21T07:15:00-05:00"
    }
];


function substractMinute(time) {
    let hour = +time.substr(11,2)
    let minute = +time.substr(14,2)

    console.log(hour);
    if (minute > 0) {
        minute = minute - 1
    } else {
        if (hour > 0) {
            hour = hour - 1
        } else {
            return false
        }
    minute = 59;
    }

    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;

    return hour + ":" + minute + ":00";

}

const t = substractMinute(events[5].start)

 console.log(t);


const start = moment('2017-02-21T08:00:00-05:00');
const end = moment('2017-02-21T18:00:00-05:00');

 
// findFreeTimes()