const profileForm = document.getElementById("profileForm");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const locationInput = document.getElementById("locationInput");
const farmSizeInput = document.getElementById("farmSizeInput");
const cropInput = document.getElementById("cropInput");
const seasonInput = document.getElementById("seasonInput");
const trackingInput = document.getElementById("trackingInput");
const waterInput = document.getElementById("waterInput");


// Existing data load
const savedData = localStorage.getItem("farmerData");

if (savedData) {

    const data = JSON.parse(savedData);

    nameInput.value = data.name || "";
    emailInput.value = data.email || "";
    phoneInput.value = data.phone || "";
    locationInput.value = data.location || "";
    farmSizeInput.value = data.farmSize || "";
    cropInput.value = data.crop || "";
    seasonInput.value = data.season || "";
    trackingInput.value = data.trackingSince || "";
    waterInput.value = data.water || "Available";
}


// Save profile
profileForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const farmerData = {

        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        location: locationInput.value.trim(),
        farmSize: farmSizeInput.value.trim(),
        crop: cropInput.value.trim(),
        season: seasonInput.value.trim(),
        trackingSince: trackingInput.value.trim(),
        water: waterInput.value

    };

    localStorage.setItem(
        "farmerData",
        JSON.stringify(farmerData)
    );

    alert("Profile updated successfully!");

    window.location.href = "profile.html";

});