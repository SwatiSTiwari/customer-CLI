#!/usr/bin/env node
const program = require("commander");
const { prompt } = require("inquirer");

const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomer,
} = require("./index");

// customer question

const question = [
  {
    type: "input",
    name: "fname",
    message: "Customer fname",
  },
  {
    type: "input",
    name: "lname",
    message: "Customer lname",
  },
  {
    type: "input",
    name: "phone",
    message: "Customer phone number",
  },
  {
    type: "input",
    name: "email",
    message: "Customer email",
  },
];

program.version("1.0.0").description("client Managemenet system");

// add commands

// program
//   .command("add <fname> <lname> <phone> <email>")
//   .alias("a")
//   .description("Add a customer")
//   .action((fname, lname, phone, email) => {
//     addCustomer({ fname, lname, phone, email });
//   });

program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    prompt(question).then((answer) => addCustomer(answer));
  });

// find commands
program
  .command("find <name>")
  .alias("f")
  .description("Find a customer")
  .action((name) => findCustomer(name));

//update commands

program
  .command("update <_id>")
  .alias("u")
  .description("update a customer")
  .action((_id) => {
    prompt(question).then((answer) => updateCustomer(_id, answer));
  });

//remove command
program
  .command("remove <_id>")
  .alias("r")
  .description("remove a customer")
  .action((_id) => removeCustomer(_id));

//list command
program
  .command("list ")
  .alias("l")
  .description("list all the customer")
  .action(() => listCustomer());

program.parse(process.argv);
