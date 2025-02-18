const PizzaBuilder = require("./PizzaBuilder")

const margherita = new PizzaBuilder()
  .setSize("grande")
  .setCrust("fina")
  .addCheese()
  .addTopping("tomate")
  .addTopping("manjericão")
  .build()

const pepperoni = new PizzaBuilder()
  .addTopping("pepperoni")
  .build()

console.log(margherita)
console.log(pepperoni)
