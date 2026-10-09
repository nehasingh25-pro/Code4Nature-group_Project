const form = document.getElementById("assessForm");
const crop = document.getElementById("crop");
const locationInput = document.getElementById("location");
const fieldPhoto = document.getElementById("fieldPhoto");
const photoPreview = document.getElementById("photoPreview");
const previewContainer = document.getElementById("previewContainer");
const removePhoto = document.getElementById("removePhoto");
const question = document.getElementById("question");
const charCount = document.getElementById("charCount");
const mapButton = document.getElementById("mapButton");
const mapMessage = document.getElementById("mapMessage");

function getSelectedStatus() {
    return document.querySelector('input[name="cropStatus"]:checked');
}
fieldPhoto.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        this.value = "";
        return;
    }

    const imageURL = URL.createObjectURL(file);
    photoPreview.src = imageURL;
    previewContainer.style.display = "block";
});
removePhoto.addEventListener("click", function () {
    fieldPhoto.value = "";
    photoPreview.src = "";
    previewContainer.style.display = "none";
});

question.addEventListener("input", function () {
    charCount.textContent = this.value.length;
});

mapButton.addEventListener("click", function () {
    mapMessage.style.display = "block";
    mapMessage.textContent =
        "📍 Map selection will be connected later. For now, please enter your village/location above.";
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const cropError = document.getElementById("cropError");
    const statusError = document.getElementById("statusError");
    const locationError = document.getElementById("locationError");
    const formMessage = document.getElementById("formMessage");

    cropError.textContent = "";
    statusError.textContent = "";
    locationError.textContent = "";
    formMessage.textContent = "";

    let isValid = true;

    if (crop.value === "") {
        cropError.textContent = "Please select a crop.";
        isValid = false;
    }

    if (!getSelectedStatus()) {
        statusError.textContent = "Please select the crop status.";
        isValid = false;
    }

    if (locationInput.value.trim() === "") {
        locationError.textContent = "Please enter your village/location.";
        isValid = false;
    }

    if (!isValid) {
        formMessage.textContent = "Please fill in the required fields.";
        return;
    }

    const assessmentData = {
        crop: crop.value,
        cropStatus: getSelectedStatus().value,
        location: locationInput.value.trim(),
        question: question.value.trim()
    };

    sessionStorage.setItem("bhumiRakshaAssessment", JSON.stringify(assessmentData));

    window.location.href = "result.html";
});