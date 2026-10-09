const savedData = sessionStorage.getItem("bhumiRakshaAssessment");

const resultCrop = document.getElementById("resultCrop");
const resultLocation = document.getElementById("resultLocation");
const resultStatus = document.getElementById("resultStatus");
const resultQuestion = document.getElementById("resultQuestion");

const statusText = {
    grow: "Crop ugana hai",
    already: "Crop already uga raha hoon",
    planning: "Next season planning"
};

if (savedData) {
    const data = JSON.parse(savedData);

    if (data.crop) {
        resultCrop.textContent = data.crop;
    }

    if (data.location) {
        resultLocation.textContent = data.location;
    }

    if (data.cropStatus && statusText[data.cropStatus]) {
        resultStatus.textContent = statusText[data.cropStatus];
    }

    if (data.question) {
        resultQuestion.textContent = data.question;
    }
}

document.getElementById("backButton").addEventListener("click", function () {
    window.location.href = "assess.html";
});

document.getElementById("saveButton").addEventListener("click", function () {
    this.textContent = "✓ Action Plan Saved";
    this.style.background = "#0f6542";
});