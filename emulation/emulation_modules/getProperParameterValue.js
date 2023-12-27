export default function getProperParameterValue(
    greenhouseConditionParameter,
    parameter,
    applianceArray,
    coefficient
) {
    if (
        greenhouseConditionParameter[parameter] >
        applianceArray[0]["getCurrent" + parameter]()
    )
        return +(
            (greenhouseConditionParameter -
                applianceArray[0]["getCurrent" + parameter]()) *
                0.8 +
            applianceArray[0]["getCurrent" + parameter]()
        ).toFixed(1);
    else
        return +(
            (applianceArray[0]["getCurrent" + parameter]() -
                greenhouseConditionParameter) *
                coefficient +
            greenhouseConditionParameter
        ).toFixed(1);
}
