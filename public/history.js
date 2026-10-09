const seasonName = document.querySelector(".season-top h2");
const seasonStatus = document.querySelector(".status");

const crop = document.querySelector(".season-details div:nth-child(1) strong");
const location = document.querySelector(".season-details div:nth-child(2) strong");
const landArea = document.querySelector(".season-details div:nth-child(3) strong");
const progress = document.querySelector(".season-details div:nth-child(4) strong");

const progressPercentage = document.querySelector(".progress-top strong");
const progressFill = document.querySelector(".progress-fill");

const totalExpense = document.querySelector(".summary-grid div:nth-child(1) strong");
const activitiesCompleted = document.querySelector(".summary-grid div:nth-child(2) strong");
const problemsImproved = document.querySelector(".summary-grid div:nth-child(3) strong");
const overallProgress = document.querySelector(".summary-grid div:nth-child(4) strong");

const defaultSeason = {
    season: "Kharif 2026",
    status: "In Progress",
    crop: "Rice",
    location: "Lucknow",
    landArea: "2 Acres",
    progress: 65,
    expense: 1500,
    activities: 3,
    problems: 1
};

let seasonData = localStorage.getItem("seasonData");

if (seasonData) {

    seasonData = JSON.parse(seasonData);

} else {

    seasonData = defaultSeason;

    localStorage.setItem(
        "seasonData",
        JSON.stringify(seasonData)
    );
}

function displaySeasonData() {

    seasonName.textContent = seasonData.season;

    seasonStatus.textContent = seasonData.status;

    crop.textContent = seasonData.crop;

    location.textContent = seasonData.location;

    landArea.textContent = seasonData.landArea;

    progress.textContent = seasonData.progress + "%";

    progressPercentage.textContent =
        seasonData.progress + "%";

    progressFill.style.width =
        seasonData.progress + "%";

    totalExpense.textContent =
        "₹" + seasonData.expense;

    activitiesCompleted.textContent =
        seasonData.activities;

    problemsImproved.textContent =
        seasonData.problems;

    overallProgress.textContent =
        seasonData.progress + "%";
}


displaySeasonData();