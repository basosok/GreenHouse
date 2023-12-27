import sensors from "../sensors/index.js";

let container = document.querySelector(".inv");
let sensorBlocks = {};
for (let parameter in sensors) {
    sensorBlocks[parameter] = document.createElement("div");
    sensorBlocks[parameter].setAttribute(
        "style",
        `position:absolute;top:${
            (5 - sensors[parameter].getPositionY()) * 100 - 4
        }px;left:${
            sensors[parameter].getPositionX() * 120 + 4
        }px;color:white;font-size:14px;line-height:30px;border-radius:50%;width:30px;height:30px;background-color:${
            parameter == "humiditySensor"
                ? "blue"
                : parameter == "aciditySensor"
                ? "green"
                : "red"
        }`
    );
    container.prepend(sensorBlocks[parameter]);
}

for (let block in sensorBlocks) {
    sensorBlocks[block].setAttribute("draggable", "true");

    let currentPositionX;
    let currentPositionY;

    sensorBlocks[block].ondragstart = function (event) {
        currentPositionX = event.pageX;
        currentPositionY = event.pageY;
    };

    let positionX;
    let positionY;
    sensorBlocks[block].ondrag = function (event) {
        const pageX = event.pageX;
        const pageY = event.pageY;
        if (currentPositionX < pageX) {
            if (
                pageX - sensorBlocks[block].style.left.slice(0, -2) > 120 &&
                120 + +sensorBlocks[block].style.left.slice(0, -2) < 1240
            )
                sensorBlocks[block].style.left =
                    120 + +sensorBlocks[block].style.left.slice(0, -2) + "px";
        } else {
            if (
                pageX - sensorBlocks[block].style.left.slice(0, -2) < -120 &&
                -120 + +sensorBlocks[block].style.left.slice(0, -2) > -200
            )
                sensorBlocks[block].style.left =
                    -120 + +sensorBlocks[block].style.left.slice(0, -2) + "px";
        }
        if (currentPositionY < pageY) {
            if (
                pageY - sensorBlocks[block].style.top.slice(0, -2) > 100 &&
                100 + +sensorBlocks[block].style.top.slice(0, -2) < 522
            )
                sensorBlocks[block].style.top =
                    100 + +sensorBlocks[block].style.top.slice(0, -2) + "px";
        } else {
            if (
                pageY - sensorBlocks[block].style.top.slice(0, -2) < -100 &&
                -100 + +sensorBlocks[block].style.top.slice(0, -2) > -20
            )
                sensorBlocks[block].style.top =
                    -100 + +sensorBlocks[block].style.top.slice(0, -2) + "px";
        }
        positionX = sensorBlocks[block].style.left;
        positionY = sensorBlocks[block].style.top;
    };

    sensorBlocks[block].ondragend = function () {
        sensorBlocks[block].style.top =
            +positionY.slice(0, -2) < 100
                ? "-4px"
                : 100 + +positionY.slice(0, -2) + "px";
        sensorBlocks[block].style.left =
            +positionX.slice(0, -2) < 120
                ? "4px"
                : 120 + +positionX.slice(0, -2) + "px";
        sensors[block].changePosition(
            +sensorBlocks[block].style.top.slice(0, -2) + 4,
            +sensorBlocks[block].style.left.slice(0, -2) - 4
        );
    };
}

export default sensorBlocks;
