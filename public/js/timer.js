const minutesBtn = document.querySelector("#chooseMin");
const timerBtn = document.querySelector("#timer");
const timerDisplay = document.querySelector("#timerDisplay");
const pauseTimerBtn = document.querySelector("#pauseTimer");
const resetTimerBtn = document.querySelector("#resetTimer");
const toggleSoundBtn = document.querySelector("#toggleSound");
let soundMode = "soundOff";

// -------------------------------- Set Timer --------------------------------

const setTimer = () => {
  minutesBtn.onclick = function () {
    const userNo = document.querySelector("#dropdown1").value;
    console.log(`userNo: ${userNo}`);
    startTimer(userNo, timerDisplay);
  };
};
minutesBtn.addEventListener("click", setTimer());

// -------------------------------- Pause Timer --------------------------------

const pauseTimer = () => {
  //
};
pauseTimerBtn.addEventListener("click", pauseTimer());

// -------------------------------- Reset Timer --------------------------------

const resetTimer = () => {
  console.log("Reset timer");
  // clearInterval(timerBtn);
};
resetTimerBtn.addEventListener("click", resetTimer());

// -------------------------------- Toggle Sound --------------------------------

toggleSoundBtn.addEventListener("click", function () {
  console.log("Sound toggled.");
  if (soundMode === "soundOn") {
    soundMode = "soundOff";
    console.log("Sound on.");
  } else {
    soundMode = "soundOn";
    console.log("Sound off.");
  }
});

// -------------------------------- Timer Function --------------------------------

function startTimer(duration, display) {
  // if (timerBtn.paused){
  //   timerBtn.play();
  //   console.log("Timer start!")
  // } else {
  //   timerBtn.pause("Timer end!");
  // }

  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    console.log("Tick");

    if (--timer < 0) {
      timer = duration;
      console.log("Time's up!");
      // playSound();
      // clearInterval(intervalEl);
    }
  }, 1000);
}

// -------------------------------- Stopwatch --------------------------------

// {
//   <div id="stopwatch">
//   <!-- CURRENT TIME -->
//   <div id="sw-time">00:00:00</div>

//   <!-- CONTROLS -->
//   <input type="button" value="Reset" id="sw-rst" disabled/>
//   <input type="button" value="Start" id="sw-go" disabled/>
// </div>
// }

const startStop = {
  // (A) INITIALIZE
  timerShow: null, // HTML time display
  timerReset: null, // HTML reset button
  timerBegin: null, // HTML start/stop button
  init: function () {
    // (A1) GET HTML ELEMENTS
    startStop.timerShow = document.getElementById("startStop-show");
    startStop.timerReset = document.getElementById("startStop-reset");
    startStop.timerBegin = document.getElementById("startStop-begin");

    // (A2) ENABLE BUTTON CONTROLS
    startStop.timerReset.addEventListener("click", startStop.reset);
    startStop.timerReset.disabled = false;
    startStop.timerBegin.addEventListener("click", startStop.start);
    startStop.timerBegin.disabled = false;
  },

  // (B) TIMER ACTION
  timer: null, // timer object
  now: 0, // current elapsed time
  tick: function () {
    // (B1) CALCULATE HOURS, MINS, SECONDS
    startStop.now++;
    const remain = startStop.now;
    const hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    const mins = Math.floor(remain / 60);
    remain -= mins * 60;
    const secs = remain;

    // (B2) UPDATE THE DISPLAY TIMER
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }
    startStop.timerShow.innerHTML = hours + ":" + mins + ":" + secs;
  },

  // (C) START!
  start: function () {
    startStop.timer = setInterval(startStop.tick, 1000);
    startStop.timerBegin.value = "Stop";
    startStop.timerBegin.removeEventListener("click", startStop.start);
    startStop.timerBegin.addEventListener("click", startStop.stop);
  },

  // (D) STOP
  stop: function () {
    clearInterval(startStop.timer);
    startStop.timer = null;
    startStop.timerBegin.value = "Start";
    startStop.timerBegin.removeEventListener("click", startStop.stop);
    startStop.timerBegin.addEventListener("click", startStop.start);
  },

  // (E) RESET
  reset: function () {
    if (startStop.timer != null) {
      startStop.stop();
    }
    startStop.now = -1;
    startStop.tick();
  },
};
// window.addEventListener("load", startStop.init);

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
