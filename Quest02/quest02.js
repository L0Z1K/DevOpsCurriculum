if(typeof process.argv[2] === "undefined"){
    console.log("usage: node quest02.js <number>");
    return;
}

var a = process.argv[2];
for(var i = 0; i < a; i++){
    console.log(" ".repeat(a-i-1)+"*".repeat(2*i+1)+" ".repeat(a-i-1));
}