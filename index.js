function distanceFromHqInBlocks(x){
    let distanceInBlocks = Math.abs(42-x);
    return distanceInBlocks;
}
function distanceFromHqInFeet(x){
    let distanceInFeet = Math.abs((42-x)*264);
    return distanceInFeet;
}
function distanceTravelledInFeet(x,y){
    let distanceTravelled = Math.abs((x-y)*264);
    return distanceTravelled;
}
function calculatesFarePrice(x,y){
    let distance = distanceTravelledInFeet(x,y)
    if (distance < 400){
        return 0
    }
    else if (distance >400 && distance <2000 ){
        return (distance - 400) *.02
    }
    else if (distance > 2000 && distance < 2500) {
        return 25
    }
    else if (distance > 2500){
        return "cannot travel that far"
    }
    // let fairPrice = Math.abs((((x-y)*264))*.02);
    // console.log(fairPrice)
    // if (fairPrice < 8){
    //     fairPrice = 0
    // }
    // else if (fairPrice > 8){
    //     fairPrice = fairPrice - 8
    // }
    // // else if (fairPrice > 40){
    // //     fairPrice = fairPrice + 25
    // // }
    // // else if (fairPrice > 75){
    // //     return "cannot travel that far"
    // return fairPrice
}