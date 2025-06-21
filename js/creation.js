const today = new Date();

document.getElementById("currentyear").textContent = today.getFullYear();

const lastModif = new Date();

document.getElementById("lastModified").textContent = `Last Modification: ${lastModif}`;

const hamButton = document.querySelector('#menu');
const navi = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navi.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.querySelector('#timestamp').value = new Date().toISOString();

//Creates a random first name
document.getElementById("rfname").addEventListener("click", () => {
    fetch("https://randomuser.me/api/?inc=name")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            // Preenche os campos do formulário
            document.getElementById("fname").value = user.name.first;
        })
        .catch(error => {
            console.error("Error getting random first name:", error);
            alert("Unable to get random first name.");
        });
});

//Creates a random last name
document.getElementById("rlname").addEventListener("click", () => {
    fetch("https://randomuser.me/api/?inc=name")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            // Preenche os campos do formulário
            document.getElementById("lname").value = user.name.last;
        })
        .catch(error => {
            console.error("Error getting random last name:", error);
            alert("Unable to get random last name.");
        });
});

//Creates a random type of hair
const hairType = ["straight", "wavy", "curly", "coily"];
document.getElementById("rthair").addEventListener("click", () => {
    document.getElementById("thair").value = hairType[Math.floor(Math.random() * hairType.length)];
});

//Creates a random color of hair
const hairColor = ["a55728", "2c1b18", "b58143", "d6b370", "724133", "4a312c", "f59797", "ecdcbf", "c93305", "e8e1e1"];
document.getElementById("rchair").addEventListener("click", () => {
    document.getElementById("chair").value = hairColor[Math.floor(Math.random() * hairColor.length)];
});

//Creates a random color of skin
const skinColor = ["614335",
    "d08b5b",
    "ae5d29",
    "edb98a",
    "ffdbb4",
    "fd9841",
    "f8d25c"];
document.getElementById("rcskin").addEventListener("click", () => {
    document.getElementById("cskin").value = skinColor[Math.floor(Math.random() * skinColor.length)];
});

//Creates a random gender
document.getElementById("rgender").addEventListener("click", () => {
    fetch("https://randomuser.me/api/?inc=gender")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            // Preenche os campos do formulário
            document.getElementById("gender").value = user.gender;
        })
        .catch(error => {
            console.error("Error getting random gender:", error);
            alert("Unable to get random gender.");
        });
});

//Creates a random height
document.getElementById("rheight").addEventListener("click", () => {
    document.getElementById("height").value = Math.floor(Math.random() * (400 - 100) + 100);
});

//Creates a random weight
document.getElementById("rweight").addEventListener("click", () => {
    document.getElementById("weight").value = Math.floor(Math.random() * (200 - 20) + 20);
});

//Creates a random age
document.getElementById("rage").addEventListener("click", () => {
    fetch("https://randomuser.me/api/?inc=dob")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            // Preenche os campos do formulário
            document.getElementById("age").value = user.dob.age;
        })
        .catch(error => {
            console.error("Error getting random gender:", error);
            alert("Unable to get random gender.");
        });
});