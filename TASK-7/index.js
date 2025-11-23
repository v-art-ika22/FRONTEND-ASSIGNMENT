const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const btn = document.getElementById("nextJoke");

function getJoke() {
  
  btn.disabled = true; 

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      setupEl.textContent = data.setup;
      punchlineEl.textContent = data.punchline;
      btn.disabled = false; 
    })
    .catch(error => {
      setupEl.textContent = "Error fetching joke 😞";
      punchlineEl.textContent = "";
      btn.disabled = false;
    });
}

btn.addEventListener("click", getJoke);
