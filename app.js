let enteredName = document.querySelector(".enteredName");
let enteredBtn = document.querySelector(".enteredBtn");
let finalName = document.querySelector(".finalName");
// `index.html` mein name input se `localStorage` mein save hota hai. `if (enteredBtn)` ensure karta hai ke button ka code sirf `index.html` par chale. `main.html` par `if (finalName)` name retrieve karta hai aur display karta hai, bina error ke, kyunki `enteredBtn` wala code `null` hone ki wajah se nahi chalta. aur control direct dosry if k pas aa jata ha aur is bar finalName null nhi hota kyu k page already main py hota hai aur local mai wo name already present hota hai
if (enteredBtn) {
  enteredBtn.addEventListener("click", () => {
    let name = enteredName.value; // get the name
    localStorage.setItem("userName", name); // save to local storage
    window.location.href = "main.html"; // go to main page
  });
}

// If we are on main.html (dashboard page)
if (finalName) {
  finalName.innerText = `Welcome, ${
    localStorage.getItem("userName") || "Guest"
  }`;
}

//*********************************************************************************************************//

//CLOCK

let clock = document.querySelector(".clock");
if (clock) {
  let setTime = () => {
    clock.innerHTML = new Date().toLocaleTimeString();
    //     let time = clock.innerHTML;
  };
  setTime();
  setInterval(setTime, 1000);
}

//*********************************************************************************************************//

//WEATHER AND LOCATION

// let BASE_URL =
//   "https://api.openweathermap.org/data/2.5/weather?lat=YOUR_LAT&lon=YOUR_LON&units=metric&appid=4010be8ef5c1bc8a347272cdb09068dc";

let locationCity = document.querySelector(".location");
let temperature = document.querySelector(".temperature");
let feelsLike = document.querySelector(".feelsLike");
let day = document.querySelector(".day");
let windSpeed = document.querySelector(".windSpeed");
let lat = document.querySelector(".latitude");
let lon = document.querySelector(".longitude");
navigator.geolocation.getCurrentPosition((position) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude);
  console.log(longitude);
  let weather = async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=4010be8ef5c1bc8a347272cdb09068dc`
    );
    let data = await response.json();
    console.log(data);
    locationCity.innerText = ` ${data.name}, ${data.sys.country}`;
    temperature.innerText = `${data.main.temp} °C`;
    feelsLike.innerText = `Feels Like ${data.main.feels_like} °C`;
    if (data.weather[0].icon.endsWith("d"))
      day.innerHTML = `<i class="fa-solid fa-sun mb-[5px]"></i> Day`;
    else {
      day.innerHTML = `<i class="fa-solid fa-moon "></i> Night`;
    }
    windSpeed.innerHTML = `<i class="fa-solid fa-fan"></i> Wind Speed ${data.wind.speed} m/s`;
    lat.innerText = `Latitude ${data.coord.lon}`;
    lon.innerText = `Longitude ${data.coord.lat}`;
  };

  weather();
});

//********************************************************************************************************************//
//TO DO LIST

let taskValue = document.querySelector(".inputTask");
let taskBtn = document.querySelector(".inputTaskBtn");
let completedTask = document.querySelector(".completed");
let pendingTask = document.querySelector(".pending");

let tasks = [
  {
    text: document.querySelector(".task1Text"),
    box: document.querySelector(".taskLists1"),
    checkBtn: document.querySelector(".checkBtn1"),
    deleteBtn: document.querySelector(".deleteBtn1"),
    status: "empty",
  },
  {
    text: document.querySelector(".task2Text"),
    box: document.querySelector(".taskLists2"),
    checkBtn: document.querySelector(".checkBtn2"),
    deleteBtn: document.querySelector(".deleteBtn2"),
    status: "empty",
  },
  {
    text: document.querySelector(".task3Text"),
    box: document.querySelector(".taskLists3"),
    checkBtn: document.querySelector(".checkBtn3"),
    deleteBtn: document.querySelector(".deleteBtn3"),
    status: "empty",
  },
  {
    text: document.querySelector(".task4Text"),
    box: document.querySelector(".taskLists4"),
    checkBtn: document.querySelector(".checkBtn4"),
    deleteBtn: document.querySelector(".deleteBtn4"),
    status: "empty",
  },
  {
    text: document.querySelector(".task5Text"),
    box: document.querySelector(".taskLists5"),
    checkBtn: document.querySelector(".checkBtn5"),
    deleteBtn: document.querySelector(".deleteBtn5"),
    status: "empty",
  },
];
//Pending Counter  Check
function updateCount() {
  let completed = 0;
  let pending = 0;
  tasks.forEach((t) => {
    if (t.status === "pending") pending++;
    if (t.status === "completed") completed++;
  });
  pendingTask.innerHTML = `Pending: ${pending} <i class="fa-solid fa-hourglass-half text-red-500"></i>`;
  completedTask.innerHTML = `Completed: ${completed} <i class="fa-solid fa-circle-check text-green-500"></i>`;
}
// Add Task
taskBtn.addEventListener("click", () => {
  let slot = tasks.find((t) => {
    return t.status === "empty";
  });
  if (slot && taskValue.value.trim() !== "") {
    slot.text.innerText = taskValue.value;
    slot.box.style.visibility = "visible";
    slot.status = "pending";
    taskValue.value = "";
  } else if (taskValue.value.trim() === "") {
    alert("Invalid Input (Empty Inputs are not allowed)");
  } else {
    alert("Task Slots Full");
    taskValue.value = "";
  }

  updateCount();
});

//Check and Delete status

tasks.forEach((task) => {
  task.checkBtn.addEventListener("click", () => {
    if (task.status === "pending") {
      task.status = "completed";
      task.text.style.textDecoration = "line-through"; // Strikethrough for task text
      task.checkBtn.style.color = "rgb(5, 252, 46)";
    }
    updateCount();
  });
});
tasks.forEach((del) => {
  del.deleteBtn.addEventListener("click", () => {
    if (del.status === "pending" || del.status === "completed") {
      del.status = "empty";
      del.box.style.visibility = "hidden";
      del.text.innerText = "";
    }
    updateCount();
  });
});
