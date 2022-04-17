const express = require("express");
const SSE = require("express-sse");
const cors = require("cors");
const ElevatorController = require("./elevator-controller");
path = require('path');

const PORT = process.env.PORT||4000;
const app = express();
const sse = new SSE();
const elevatorController = new ElevatorController(3, 10);
elevatorController.start();

app.use(cors());
app.use(express.json());

elevatorController.on("move", (evt) => {
  sse.send(evt);
});

app.get("/ping", (req, res) => res.send("pong"));

app.get("/building", (req, res) => res.send(elevatorController.building));

app.put("/floor/:number", (req, res) => {
  const elevator = elevatorController.callElevator(
    Number.parseInt(req.params.number)
  );
  res.send(elevator);
});

app.get("/elevators", (req, res) => {
  res.send(elevatorController.elevators);
});

app.get("/stream", sse.init);

app.get("/", (req, res) => {
  res.status(200).send('Welcome to Elevator System.');
});


app.listen(PORT, () =>
  console.log(`Elevator System on http://localhost:${PORT}`)
);
