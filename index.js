const mongoose = require("mongoose");
const customer = require("./models/customer");
const Customer = require("./models/customer");
//map global promis- get rid of warning
mongoose.Promise = global.Promise;
//connect to db

const db = mongoose.connect(
  "mongodb://localhost:27017/customerCli"
  //   useMongoClient: true,
);

// Add customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("new Customer Added");
    db.close();
  });
};

// Find customer
const findCustomer = (name) => {
  // make case insensitive
  const search = new RegExp(name, "i");

  Customer.find({ $or: [{ fname: search }, { lname: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.close();
    }
  );
};

// update customer
const updateCustomer = (_id, customer) => {
  Customer.updateOne({ _id }, customer).then((customer) => {
    console.info("cutomor updated");
    db.close();
  });
};
// remove customer

const removeCustomer = (_id) => {
  Customer.remove({ _id }).then((customer) => {
    console.info("cutomor removed");
    db.close();
  });
};

// list all customer

const listCustomer = () => {
  Customer.find().then((customer) => {
    console.info(customer);
    console.info(`${customer.length}  customer`);
    db.close();
  });
};
// export all method
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomer,
};
