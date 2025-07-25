let boxCount = 0;
let completed = 0;
let pending = 0;
let taskBtn = document.querySelector(".inputTaskBtn");
let taskValue = document.querySelector(".inputTask");

let task1box = document.querySelector(".taskLists1");
let firstTask = document.querySelector(".task1Text");

let task2box = document.querySelector(".taskLists2");
let secondTask = document.querySelector(".task2Text");

let task3box = document.querySelector(".taskLists3");
let thirdTask = document.querySelector(".task3Text");

let task4box = document.querySelector(".taskLists4");
let forthTask = document.querySelector(".task4Text");

let task5box = document.querySelector(".taskLists5");
let fifthTask = document.querySelector(".task5Text");

let completedTask = document.querySelector(".completed");
let pendingTask = document.querySelector(".pending");

taskBtn.addEventListener("click", () => {
  if (boxCount === 0) {
    firstTask.innerText = taskValue.value;
    firstTask.style.visibility = "visible";
    task1box.style.visibility = "visible";
    pending++;
    pendingTask.innerHTML = `Pending: ${pending} <i class="fa-solid fa-hourglass-half text-red-500"></i>`;
    boxCount++;
  } else if (boxCount === 1) {
    secondTask.innerText = taskValue.value;
    secondTask.style.visibility = "visible";
    task2box.style.visibility = "visible";
    pending++;
    pendingTask.innerHTML = `Pending: ${pending} <i class="fa-solid fa-hourglass-half text-red-500"></i>`;
    boxCount++;
  } else if (boxCount === 2) {
    thirdTask.innerText = taskValue.value;
    thirdTask.style.visibility = "visible";
    task3box.style.visibility = "visible";
    pending++;
    pendingTask.innerHTML = `Pending: ${pending} <i class="fa-solid fa-hourglass-half text-red-500"></i>`;
    boxCount++;
    taskValue.value.remove();
  } else if (boxCount === 3) {
    forthTask.innerText = taskValue.value;
    forthTask.style.visibility = "visible";
    task4box.style.visibility = "visible";
    pending++;
    pendingTask.innerHTML = `Pending: ${pending} <i class="fa-solid fa-hourglass-half text-red-500"></i>`;
    boxCount++;
    taskValue.value.remove();
  } else if (boxCount === 4) {
    fifthTask.innerText = taskValue.value;
    fifthTask.style.visibility = "visible";
    task5box.style.visibility = "visible";
    pending++;
    pendingTask.innerHTML = `Pending: ${pending} <i class="fa-solid fa-hourglass-half text-red-500"></i>`;
    boxCount++;
    taskValue.value.remove();
  } else {
    alert("Cannot add more Tasks!");
  }
});

//Check Delete System
let checkBtn1 = document.querySelector(".checkBtn1");
let deleteBtn1 = document.querySelector(".deleteBtn1");

let checkBtn2 = document.querySelector(".checkBtn2");
let deleteBtn2 = document.querySelector(".deleteBtn2");

let checkBtn3 = document.querySelector(".checkBtn3");
let deleteBtn3 = document.querySelector(".deleteBtn3");

let checkBtn4 = document.querySelector(".checkBtn4");
let deleteBtn4 = document.querySelector(".deleteBtn4");

let checkBtn5 = document.querySelector(".checkBtn5");
let deleteBtn5 = document.querySelector(".deleteBtn5");

checkBtn1.addEventListener("click", () => {
  completed++;
  completedTask.innerHTML = `Completed: ${completed} <i class="fa-solid fa-circle-check text-green-500"></i>`;
  checkBtn1.style.color = "rgb(5, 252, 46)";
  pending--;
  pendingTask.innerHTML = `Pending: ${pending} <i class="fa-solid fa-hourglass-half text-red-500"></i>`;
});

deleteBtn1.addEventListener("click", () => {
  firstTask.innerText = "";
  task1box.style.visibility = "hidden";
  completed--;
  completedTask.innerHTML = `Completed: ${completed} <i class="fa-solid fa-circle-check text-green-500"></i>`;
});
checkBtn1.addEventListener("click", () => {
  completed++;
  completedTask.innerHTML = `Completed: ${completed} <i class="fa-solid fa-circle-check text-green-500"></i>`;
  checkBtn1.style.color = "rgb(5, 252, 46)";
  pending--;
  pendingTask.innerHTML = `Pending: ${pending} <i class="fa-solid fa-hourglass-half text-red-500"></i>`;
});

deleteBtn2.addEventListener("click", () => {
  secondTask.innerText = "";
  task2box.style.visibility = "hidden";
  completed--;
  completedTask.innerHTML = `Completed: ${completed} <i class="fa-solid fa-circle-check text-green-500"></i>`;
});
checkBtn3.addEventListener("click", () => {
  completed++;
  completedTask.innerHTML = `Completed: ${completed} <i class="fa-solid fa-circle-check text-green-500"></i>`;
  checkBtn3.style.color = "rgb(5, 252, 46)";
  pending--;
  pendingTask.innerHTML = `Pending: ${pending} <i class="fa-solid fa-hourglass-half text-red-500"></i>`;
});

deleteBtn3.addEventListener("click", () => {
  thirdTask.innerText = "";
  task3box.style.visibility = "hidden";
  completed--;
  completedTask.innerHTML = `Completed: ${completed} <i class="fa-solid fa-circle-check text-green-500"></i>`;
});
checkBtn4.addEventListener("click", () => {
  completed++;
  completedTask.innerHTML = `Completed: ${completed} <i class="fa-solid fa-circle-check text-green-500"></i>`;
  checkBtn4.style.color = "rgb(5, 252, 46)";
  pending--;
  pendingTask.innerHTML = `Pending: ${pending} <i class="fa-solid fa-hourglass-half text-red-500"></i>`;
});

deleteBtn4.addEventListener("click", () => {
  forthTask.innerText = "";
  task4box.style.visibility = "hidden";
  completed--;
  completedTask.innerHTML = `Completed: ${completed} <i class="fa-solid fa-circle-check text-green-500"></i>`;
});
checkBtn5.addEventListener("click", () => {
  completed++;
  completedTask.innerHTML = `Completed: ${completed} <i class="fa-solid fa-circle-check text-green-500"></i>`;
  checkBtn5.style.color = "rgb(5, 252, 46)";
  pending--;
  pendingTask.innerHTML = `Pending: ${pending} <i class="fa-solid fa-hourglass-half text-red-500"></i>`;
});

deleteBtn5.addEventListener("click", () => {
  fifthTask.innerText = "";
  task5box.style.visibility = "hidden";
  completed--;
  completedTask.innerHTML = `Completed: ${completed} <i class="fa-solid fa-circle-check text-green-500"></i>`;
});
