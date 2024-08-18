const patientList = document.getElementById("patient");

let username = "coalition";
let password = "skills-test";
let auth = "Basic " + btoa(`${username}:${password}`);

console.log(auth);

fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
  method: "GET",
  headers: {
    Authorization: auth,
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    console.log(data);
    data.forEach((elem) => {
      console.log(elem);
      patientList.innerHTML += ` <div class="patient-item">
                            <img src="${elem.profile_picture}" alt="Emily Williams">
                            <div class="patient-details">
                                <p>${elem.name}</p>
                                <small>${elem.age}</small>
                            </div>
                        </div>`;
    });
  })

  .catch((error) => console.warn("Error fetching data:", error));
