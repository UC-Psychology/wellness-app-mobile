fetch('http://127.0.0.1:8000/users/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id: 3489753498,
    feeling: "Happy",
    body_parts: [
      { part: "Neck", feeling: "Sad" },
      { part: "Stomach", feeling: "Happy" }
    ],
    extra_note: "Ate a great meal today :)",
    geolocation: "-43905, 45097",
    timestamp: "4390534098430945"
  })
})
.then(response => response.json())
.then(data => console.log(data));