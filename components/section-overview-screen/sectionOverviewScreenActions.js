export const setZone = (zone) => dispatch =>{
    console.log("set zone: ", zone)
    var zoneObject = {};
    zoneObject['zone'] = zone;
    dispatch({
        type: "SET_ZONE",
        payload: zoneObject
    })
}
