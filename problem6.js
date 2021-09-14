let newFormula = (a,b,c,d) =>{
    let x = (a-c)**2+(b-d)**2;
    return Math.sqrt(x);
}

const x = newFormula(3, 10, 0, 6);
if (x !== 5) {
  console.log("Failed: the calculation is wrong");
} else {
  console.log("Passed, bravo");
}
