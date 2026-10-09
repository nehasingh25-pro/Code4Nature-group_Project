const addBtn = document.querySelector(".add-btn");
const updatesCard = document.querySelector(".updates-card");

const activitiesCount = document.querySelector(".stat-card:nth-child(1) strong");
const updatesCount = document.querySelector(".stat-card:nth-child(4) strong");

addBtn.addEventListener("click", function () {

    const title = prompt("Enter activity name:");

    if (title === null || title.trim() === "") {
        return;
    }

    const description = prompt("Enter update details:");

    if (description === null || description.trim() === "") {
        return;
    }

    const today = new Date();

    const date = today.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const newUpdate = document.createElement("div");

    newUpdate.className = "update";

    newUpdate.innerHTML = `
        <div class="update-icon">
            🌱
        </div>

        <div class="update-content">
            <span>${date}</span>

            <h3>${title}</h3>

            <p>
                ${description}
            </p>
        </div>
    `;

    updatesCard.appendChild(newUpdate);

    let activities = Number(activitiesCount.textContent);
    activitiesCount.textContent = activities + 1;

    let updates = Number(updatesCount.textContent);
    updatesCount.textContent = updates + 1;
});