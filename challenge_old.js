 function findFreeTimes (start, end, duration, events) {

  for( let i = 0; i <events ;i++){
    if(start <= events[i].start && start >= events[i].end && end >= events[i].end && end <= events[i].start){
      console.log('ppp');
    }
  }

  return null;
  
}
console.log("hahah");
const events = [
  {
    "start": "2017-02-21T12:00:00-05:00",
    "end": "2017-02-21T12:30:00-05:00",
  },
  {
    "start": "2017-02-21T14:00:00-05:00",
    "end": "2017-02-21T16:00:00-05:00"
  }
];

const start = moment('2017-02-21T08:00:00-05:00');
const end = moment('2017-02-21T18:00:00-05:00');

findFreeTimes(start, end, 30, events);



