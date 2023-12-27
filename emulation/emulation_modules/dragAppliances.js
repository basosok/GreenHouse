import appliances from "../appliances/index.js";

const applianceBlocks = {};
let container = document.querySelector(".inv");
for (let applianceArray in appliances) {
    applianceBlocks[applianceArray] = [];
    for (let appliance of appliances[applianceArray]) {
        const applianceBlock = document.createElement("div");
        applianceBlock.setAttribute(
            "style",
            `position:absolute;top:${
                (5 - appliance.getPositionY()) * 100 - 8
            }px;left:${
                appliance.getPositionX() * 120 - 1
            }px;width:40px;height:40px;background:url(../assets/icons/${applianceArray}.png);background-size:cover;`
        );
        container.prepend(applianceBlock);
        applianceBlocks[applianceArray].push(applianceBlock);
    }
}

for (let applianceBlockArray in applianceBlocks) {
    for (
        let applianceNum = 0;
        applianceNum < applianceBlocks[applianceBlockArray].length;
        applianceNum++
    ) {
        const currentAppliance =
            applianceBlocks[applianceBlockArray][applianceNum];
        currentAppliance.setAttribute("draggable", "true");

        let currentPositionX;
        let currentPositionY;

        currentAppliance.ondragstart = function (event) {
            currentPositionX = event.pageX;
            currentPositionY = event.pageY;
        };

        let positionX;
        let positionY;
        currentAppliance.ondrag = function (event) {
            const pageX = event.pageX;
            const pageY = event.pageY;
            if (currentPositionX < pageX) {
                if (
                    pageX - currentAppliance.style.left.slice(0, -2) > 120 &&
                    120 + +currentAppliance.style.left.slice(0, -2) < 1240
                )
                    currentAppliance.style.left =
                        120 + +currentAppliance.style.left.slice(0, -2) + "px";
            } else {
                if (
                    pageX - currentAppliance.style.left.slice(0, -2) < -120 &&
                    -120 + +currentAppliance.style.left.slice(0, -2) > -200
                )
                    currentAppliance.style.left =
                        -120 + +currentAppliance.style.left.slice(0, -2) + "px";
            }
            if (currentPositionY < pageY) {
                if (
                    pageY - currentAppliance.style.top.slice(0, -2) > 100 &&
                    100 + +currentAppliance.style.top.slice(0, -2) < 522
                )
                    currentAppliance.style.top =
                        100 + +currentAppliance.style.top.slice(0, -2) + "px";
            } else {
                if (
                    pageY - currentAppliance.style.top.slice(0, -2) < -100 &&
                    -100 + +currentAppliance.style.top.slice(0, -2) > -20
                )
                    currentAppliance.style.top =
                        -100 + +currentAppliance.style.top.slice(0, -2) + "px";
            }
            positionX = currentAppliance.style.left;
            positionY = currentAppliance.style.top;
        };

        currentAppliance.ondragend = function () {
            currentAppliance.style.top =
                +positionY.slice(0, -2) < 100
                    ? "-8px"
                    : 100 + +positionY.slice(0, -2) + "px";
            currentAppliance.style.left =
                +positionX.slice(0, -2) < 120
                    ? "-1px"
                    : 120 + +positionX.slice(0, -2) + "px";
            appliances[applianceBlockArray][applianceNum].changePosition(
                +currentAppliance.style.top.slice(0, -2) + 8,
                +currentAppliance.style.left.slice(0, -2) + 1
            );
        };
    }
}
