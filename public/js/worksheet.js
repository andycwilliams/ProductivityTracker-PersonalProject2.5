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
