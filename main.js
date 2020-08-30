
function yearsUntilPayoff () {
  var bill = document.getElementById("bill").value;
  var install = document.getElementById("costOfCost").value;
  annualBill = bill * 12;
let breakEven = install / annualBill;
roundEven = Math.round(breakEven)
document.getElementById('saved').innerHTML = 'You are ' + roundEven + ' years away from breakeven on your renewable energy purchase';
};
