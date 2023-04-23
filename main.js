function getLoyaltyPoints(orderNumber) {

   let loyaltyPoints = 0;

  let previousPoints = 0;

  let currentPoints = 1;


   for (let i = 1; i <= orderNumber; i++) {

     if (i <= 2) {

       loyaltyPoints = 1;

     } else {

      loyaltyPoints = previousPoints + currentPoints;

     previousPoints = currentPoints;

      currentPoints = loyaltyPoints;

     }

   }

  return loyaltyPoints;

 }
