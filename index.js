// const { MongoClient } = require('mongodb');
// const axios = require('axios');
// const client = new MongoClient('mongodb://localhost:27017');
// const db = client.db('birds');
// const collection = db.collection('documents');

// Start with front end (user interface), get elements I want rendered
// Then populate with data
// Don't worry about handlebars. Keep it as simple as possible
// Point is to get familiar with serverless and implement it on a project



// const getBirds = (collection) => collection.find({}).toArray();

// const addBird = async (collection) => {
//   const result = await collection.insertMany([
//     { name: 1 },
//     { name: 2 },
//     { name: 3 },
//   ]);
//   console.log(result);
//   return collection;
// };

// app.get('/', async function (req, res) {
//   const birds = await getBirds(collection);
//   res.json(birds);
// });

// client.connect().then(() => app.listen(3000));

const chooseMinutes = () => {
    let minutesBtn = document.querySelector("#choose");
    let randomNo = Math.ceil(Math.random() * 100);
    minutesBtn.onclick = function() {
       let userNo = document.querySelector("#inputNumber").value;
       let valueInt = parseInt(userNo, 100);
       console.log(randomNo, userNo);
    };
};

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
          console.log("Time's up!");
          // playSound();
          // handleLoss();
          // clearInterval(intervalEl);
      };
  }, 1000);
};

// ----------------------------------------------------------------

const taskContainer = () => {
  for (let i = 0; i < 10; i++){
      const itemEl = document.createElement("div");
      // const hourEl = document.createElement("div");
      const textAreaEl = document.createElement("textarea");
      const addItemminutesBtn = document.createElement("button");

      // hourEl.textContent = i + ":00";
      addItemminutesBtn.innerText = "Add";

      itemEl.setAttribute("id", "hour-", + i);
      itemEl.classList.add("row", "time-block")
      // hourEl.classList.add("col-sm-12", "hour");
      textAreaEl.classList.add("col-sm-11", "description");
      textAreaEl.setAttribute("id", "Dynamically Generated ID")
      addItemminutesBtn.classList.add("col-sm-1", "minutesBtn", "addItemminutesBtn");

      // if (i < currentTimeEl){
      //     itemEl.classList.add("past");
      // } else if (i === currentTimeEl){
      //     itemEl.classList.add("present");
      // } else {
      //     itemEl.classList.add("future");
      // };

      // timeBlockContainer.appendChild(itemEl);
      // itemEl.appendChild(hourEl);
      itemEl.appendChild(textAreaEl);
      itemEl.appendChild(addItemminutesBtn);
  };
};

window.onload = function () {
  const fiveMinutes = 60 * 5,
      display = document.querySelector('#timerDisplay');
  startTimer(fiveMinutes, display);
};

taskContainer();

// ----------------------------------------------------------------

// window.onload = function () {
//   const time = 60 / 2, // your time in seconds here
//       display = document.querySelector('#timerDisplay');
//   startTimer(time, display);
// };

// const sessionTimer = () => {
//   const sec = 30;
//   const timer = setInterval(function(){
//       document.getElementById('timerDisplay').innerHTML='00:'+sec;
//       sec--;
//       if (sec < 0) {
//           clearInterval(timer);
//       };
//   }, 1000);
// };

// function startTimer(duration, display) {
//   const timer = duration, minutes, seconds;
//   document.getElementById('timerDisplay').innerHTML = '00:' + sec;
//   setInterval(function () {
//       minutes = parseInt(timer / 60, 10)
//       seconds = parseInt(timer % 60, 10);

//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;

//       display.textContent = minutes + ":" + seconds;

//       if (--timer < 0) {
//           timer = 0;
//           // timer = duration; // uncomment this line to reset timer automatically after reaching 0
//       }
//   }, 1000);
// }