
function yearsUntilPayoff () {
  var bill = document.getElementById("bill").value;
  var install = document.getElementById("costOfCost").value;
  annualBill = bill * 12;
let breakEven = install / annualBill;
roundEven = Math.round(breakEven)
if (bill >= 0 && install >= 0){
document.getElementById('saved').innerHTML = 'You are ' + roundEven + ' years away from break-even on your renewable energy purchase';
}
};
