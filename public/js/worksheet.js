// -------------------------------- Add Task --------------------------------

document.getElementById("addTask").addEventListener("click", () => {
  const newTask = () => ({
    // author: document.getElementById("author").value,
    body: document.getElementById("taskField").value,
  });
  console.log("Adding task: ", newTask());
  // axios
  //   .post("/.netlify/functions/tweeting-api", {
  //     body: JSON.stringify(newTask()),
  //   })
  //   .then(console.log);
});

// -------------------------------- Task Generator --------------------------------

const taskListGenerator = () => {
  for (let i = 0; i < 10; i++) {
    const itemEl = document.createElement("div");
    // const hourEl = document.createElement("div");
    const textAreaEl = document.createElement("textarea");
    const addItemminutesBtn = document.createElement("button");

    // hourEl.textContent = i + ":00";
    addItemminutesBtn.innerText = "Add";

    itemEl.setAttribute("id", "hour-", +i);
    itemEl.classList.add("row", "time-block");
    // hourEl.classList.add("col-sm-12", "hour");
    textAreaEl.classList.add("col-sm-11", "description");
    textAreaEl.setAttribute("id", "Dynamically Generated ID");
    addItemminutesBtn.classList.add(
      "col-sm-1",
      "minutesBtn",
      "addItemminutesBtn"
    );

    // if (i < currentTimeEl){
    //     itemEl.classList.add("past");
    // } else if (i === currentTimeEl){
    //     itemEl.classList.add("present");
    // } else {
    //     itemEl.classList.add("future");
    // };

    taskContainer.appendChild(itemEl);
    // itemEl.appendChild(hourEl);
    itemEl.appendChild(textAreaEl);
    itemEl.appendChild(addItemminutesBtn);
  }
};

randomQuoteGenerator();
taskListGenerator();
