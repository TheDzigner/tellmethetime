const sendRequestBtn = document.querySelector("#sendRequestBtn");
let html = "";

async function data() {
  const cityInput = document.querySelector("#cityInput").value;
     
  try {
    const url = await fetch(`https://api.api-ninjas.com/v1/worldtime?city=${cityInput}`, {
      headers: {
        "x-api-key": "6LSQhXixhNrKtoSskVSj4WRu4ErPd6H6OiB64d4k"
      }
    });

    const results = await url.json();

    if (results.error) {
      document.querySelector(".results-container").innerHTML = 
      `<p class="error">${results.error}</p>`
    } else {
     document.querySelector(".results-container").innerHTML = "loading info.....";
      html = `
        <div class="time">
          <span>${results.hour} h</span>
          <span>${results.minute} m</span>
          <span>${results.second} s</span>
        </div>

        <div class="zone-results">
          <div class="timezone card">
            <h5>timezone :</h5>
            <p>${results.timezone}</p>
          </div>
          <div class="date card">
            <h5>date :</h5>
            <p>${results.date}</p>
          </div>
          <div class="day-of-week card">
            <h5>day of week :</h5>
            <p>${results.day_of_week}</p>
          </div>
        </div>
      `;
      
      document.querySelector(".results-container").innerHTML = html;
        
    }

  } catch (error) {
    alert(error);
  }
}

sendRequestBtn.onclick = data;
