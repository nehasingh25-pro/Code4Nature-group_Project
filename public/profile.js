const changePhotoBtn = document.getElementById("changePhotoBtn");
const photoInput = document.getElementById("photoInput");

const profileAvatar = document.getElementById("profileAvatar");
const topAvatar = document.getElementById("topAvatar");


// Change Photo button
changePhotoBtn.addEventListener("click", function () {
    photoInput.click();
});


// Photo select hone ke baad
photoInput.addEventListener("change", function () {

    const file = photoInput.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function () {

        profileAvatar.innerHTML = `
            <img src="${reader.result}" alt="Farmer Photo">
        `;

        topAvatar.innerHTML = `
            <img src="${reader.result}" alt="Farmer Photo">
        `;

        localStorage.setItem("farmerPhoto", reader.result);
    };

    reader.readAsDataURL(file);
});


// Refresh ke baad saved photo show karna
const savedPhoto = localStorage.getItem("farmerPhoto");

if (savedPhoto) {

    profileAvatar.innerHTML = `
        <img src="${savedPhoto}" alt="Farmer Photo">
    `;

    topAvatar.innerHTML = `
        <img src="${savedPhoto}" alt="Farmer Photo">
    `;
}


// Logout
const logoutBtn = document.querySelector(".sidebar-logout a");

logoutBtn.addEventListener("click", function (event) {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (!confirmLogout) {
        event.preventDefault();
    }
});