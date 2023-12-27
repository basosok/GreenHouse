import calculateParameterGrade from "./calculateParameterGrade.js";
import greenhouseConditions from "./greenhouseConditions.js";
import plants from "../plants/index.js";
import appliances from "../appliances/index.js";

export default function checkConditions() {
    for (let plantNumber = 0; plantNumber < plants.length; plantNumber++) {
        let totalGrade = 0;
        for (let appliance in appliances) {
            let parameter;
            for (let param in greenhouseConditions) {
                if (appliances[appliance][0]["getEssential" + param])
                    parameter = param;
            }
            totalGrade += calculateParameterGrade(
                plants[plantNumber],
                appliances[appliance],
                parameter
            );
        }
        plants[plantNumber].setGrowthRate(totalGrade);
    }
}
