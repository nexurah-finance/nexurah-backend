const mongoose = require('mongoose');
const { Customer, Loan, User, Payment } = require('./db');

(async () => {
  await mongoose.connect("mongodb+srv://sachin:student123@cluster0.pgfrxp6.mongodb.net/finance");
  
  const customers = await Customer.find().lean();
  console.log("CUSTOMERS:", JSON.stringify(customers, null, 2));
  
  const loans = await Loan.find().lean();
  console.log("LOANS:", JSON.stringify(loans, null, 2));

  process.exit(0);
})();
