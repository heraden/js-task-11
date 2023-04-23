document.getElementById("bottom").addEventListener("click", function () { 
  event.preventDefault(); 
  let orderNumber = document.getElementById("number").value;
  
  let point1 = 0;
  let point2 = 1;

  if (orderNumber <= 2) {
    console.log(point2);
  } else {
    for (let i = 3; i <= orderNumber; i++) {
      let sum = point1 + point2;
      point1 = point2;
      point2 = sum;
    }
    console.log(point2);
  }
});

