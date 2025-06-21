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

//Get the url for the info page
const currentUrl = window.location.href;

//Separate the url
const everything = currentUrl.split("?");

//Get the information submited into an array
let formData = everything[1].split("&");

//Function to display the information
function show(info) {
    formData.forEach((element) => {
        console.log(element)
        if (element.startsWith(info)) {
            result = element.split("=")[1].replace("%40", "@");
        };
    });
    return (result);
};

//Display the time of the form submission
const originalTimestamp = show("timestamp");
const formattedDate = new Date(decodeURIComponent(originalTimestamp)).toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});

//Select the id in the html to display the information details
const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
<div id="crinfo">
    <h2><strong>Creator Information</strong></h2>
    <p><strong>Creator:</strong> ${show("cfirst-name")} ${show("clast-name")}</p>
    <p><strong>Email:</strong> ${show("email")}</p>
</div>
<div id="chinfo">
    <h2 ><strong>Character Information</strong></h2>
    <p><strong>Name:</strong> ${show("first-name")} ${show("last-name")}</p>
    <p><strong>Type of Hair:</strong> ${show("type-of-hair")}</p>
    <p><strong>Color of Hair:</strong> ${show("color-of-hair")}</p>
    <p><strong>Color of Skin:</strong> ${show("color-of-skin")}</p>
    <p><strong>Gender:</strong> ${show("gender")}</p>
    <p><strong>Height:</strong> ${show("height")} cm</p>
    <p><strong>Weight:</strong> ${show("weight")} kg</p>
    <p><strong>Age:</strong> ${show("age")}</p>
    <p><strong>Character created at:</strong> ${formattedDate}
</div>`;

//Adding the Dicebear Avatar
//Saving the information
const hairColor = show("color-of-hair");
const skinColor = show("color-of-skin");
const gender = show("gender");

//Creates a seed
const seed = Math.random().toString(36).substring(2, 10);

//Dicebear URL
const avatarURL = `https://api.dicebear.com/8.x/adventurer/svg?seed=${encodeURIComponent(seed)}&gender=${gender}&hairColor[]=${hairColor}&skinColor[]=${skinColor}`;

//Display the avatar image
const avatarContainer = document.getElementById("avatar");
avatarContainer.innerHTML = `<img src="${avatarURL}" alt="Random Avatar" width="200">`;