let numberOfDay = 0,
    numberOfHour = 0;

const timer_block = document.querySelector(".timer");
const timeBlockCommonText = `${sessionStorage.getItem(
    "culture"
)}, cycle start: ${sessionStorage
    .getItem("startDate")
    .split("-")
    .reverse()
    .join(".")}; `;

export default function changeEmulationTime(emulationFunc) {
    if (numberOfHour > 23) {
        numberOfDay++;
        numberOfHour = 0;
    }
    timer_block.textContent =
        timeBlockCommonText +
        `${numberOfDay} days, ${numberOfHour} hours passed`;
    numberOfHour += 1;
    if (numberOfDay < 60) setTimeout(emulationFunc, 125);
    else
        timer_block.textContent =
            timeBlockCommonText + `${numberOfDay} days passed (Done!)`;
    return numberOfDay;
}
