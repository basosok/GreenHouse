import getProperParameterValue from "./getProperParameterValue.js";
import greenhouseConditions from "./greenhouseConditions.js";

function isInRange(rangeOfNumbers, x, y) {
    return rangeOfNumbers.includes(x) && rangeOfNumbers.includes(y);
}

export default function calculateParameterGrade(
    plant,
    applianceArray,
    parameter
) {
    const distancesToPlantX = applianceArray.map(
        (app) => app.getPositionX() - plant.getPlantPositionX()
    );
    const distancesToPlantY = applianceArray.map(
        (app) => app.getPositionY() - plant.getPlantPositionY()
    );

    let parameterCoefficient = greenhouseConditions[parameter];
    let parameterGrade = 0;
    for (
        let distanceNumber = 0;
        distanceNumber < distancesToPlantX.length;
        distanceNumber++
    ) {
        if (
            parameterGrade < 3 &&
            isInRange(
                [0, 1],
                distancesToPlantX[distanceNumber],
                distancesToPlantY[distanceNumber]
            )
        ) {
            parameterCoefficient = getProperParameterValue(
                greenhouseConditions[parameter],
                parameter,
                applianceArray,
                0.8
            );
            parameterCoefficient /=
                applianceArray[0]["getEssential" + parameter]();
            parameterGrade = 3;
        } else if (
            parameterGrade < 2 &&
            isInRange(
                [2, 1, 0, -1],
                distancesToPlantX[distanceNumber],
                distancesToPlantY[distanceNumber]
            )
        ) {
            parameterCoefficient = getProperParameterValue(
                greenhouseConditions[parameter],
                parameter,
                applianceArray,
                0.5
            );
            parameterCoefficient /=
                applianceArray[0]["getEssential" + parameter]();
            parameterGrade = 2;
        } else if (
            parameterGrade < 1 &&
            isInRange(
                [3, 2, 1, 0, -1, -2],
                distancesToPlantX[distanceNumber],
                distancesToPlantY[distanceNumber]
            )
        ) {
            parameterCoefficient = getProperParameterValue(
                greenhouseConditions[parameter],
                parameter,
                applianceArray,
                0.2
            );
            parameterCoefficient /=
                applianceArray[0]["getEssential" + parameter]();
            parameterGrade = 1;
        }
    }

    return parameterCoefficient == greenhouseConditions[parameter]
        ? 1
        : parameterCoefficient;
}
