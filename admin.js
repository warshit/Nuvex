const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

function loadEvents() {
  eventList.innerHTML = "";
  const events = JSON.parse(localStorage.getItem("events")) || [];

  events.forEach((event, index) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <strong>${event.title}</strong><br>
      ${event.description}<br>
      ${event.date}<br>
      ${event.time}<br>
      <button onclick="deleteEvent(${index})">Delete</button>
      <hr />
    `;
    eventList.appendChild(card);
  });
}

function deleteEvent(index) {
  let events = JSON.parse(localStorage.getItem("events")) || [];
  events.splice(index, 1); // Remove one event at index
  localStorage.setItem("events", JSON.stringify(events));
  loadEvents();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const image = document.getElementById("image").value;

  const newEvent = { title, description, date, time, image };

  let events = JSON.parse(localStorage.getItem("events")) || [];
  events.push(newEvent);
  localStorage.setItem("events", JSON.stringify(events));

  alert("Event posted!");
  form.reset();
  loadEvents();
});

window.onload = loadEvents;
