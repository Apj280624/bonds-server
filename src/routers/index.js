const Router = require("express").Router();
const TradeRouter = require("./trade.router");
const SecurityRouter = require("./security.router");
const BookRouter = require("./book.router");
const CounterpartyRouter = require("./counterparty.router");
const UserRouter = require("./user.router");
const RequestRouter = require("./request.router");


Router.use("/trade", TradeRouter);
Router.use("/security", SecurityRouter);
Router.use("/book", BookRouter);
Router.use("/counterparty", CounterpartyRouter);
Router.use("/user", UserRouter);
Router.use("/request", RequestRouter);

module.exports = Router;
