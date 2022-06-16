const mstr = "_gcl_au=1.1.629049147.1653058692; session_id=1f398d49-faf7-4df8-b63f-cf269bd28eb6";


function getArrFromCookie(str, target) {
    str = str.split(" ").join("");
    const arr = str.split(";").map(e => e.split("="));

    for(let i = 0; i < arr.length; i++) {
        if(arr[i][0] === target) {
            return arr[i][1];
        }
    }
}
console.log(getArrFromCookie(mstr ,"session_id"));