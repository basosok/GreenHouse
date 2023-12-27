import plants from "../plants/index.js";

const plantsBlocksArray = [];
let tempPLantArray = [];
for (let plant of document.querySelectorAll(".row img")) {
    tempPLantArray.push(plant);
    if (tempPLantArray.length == 10) {
        plantsBlocksArray.unshift(...tempPLantArray);
        tempPLantArray = [];
    }
}
plantsBlocksArray.forEach((plant) => plant.setAttribute("width", "5px"));

growPlants.growingDay = 6;
export default function growPlants(currentDay) {
    if (currentDay == 7)
        plantsBlocksArray.forEach((plantBlock) =>
            plantBlock.setAttribute("style", "visibility:visible")
        );
    if (currentDay >= 7 && currentDay != growPlants.growingDay) {
        growPlants.growingDay = currentDay;
        for (let plantNumber = 0; plantNumber < plants.length; plantNumber++) {
            const plantBlockWidth = +plantsBlocksArray[plantNumber]
                .getAttribute("width")
                .slice(0, -2);
            if (plantBlockWidth < 81) {
                let plantGrowthRate = plants[plantNumber].getGrowthRate();

                plantsBlocksArray[plantNumber].setAttribute(
                    "width",
                    `${plantBlockWidth + plantGrowthRate}px`
                );
            }
        }
    }
}
