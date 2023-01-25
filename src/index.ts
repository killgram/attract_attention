import express, { Application } from "express";
import cors from "cors";

const { ToadScheduler, SimpleIntervalJob, Task } = require("toad-scheduler");
import { AttractAttentionBot } from "./bots";
import { Constants } from "./configuration";

const app: Application = express();
const PORT = process.env.PORT || 9987;

// modules
import { getWorkStatus, changeConfig, hardPostMessage } from "./modules";

// configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// scheduler
const scheduler = new ToadScheduler();
const sendMessageTask = new Task("keep awake", () =>
  AttractAttentionBot.sendMessage()
);
const sendMessageJob = new SimpleIntervalJob(
  { seconds: Constants.UPDATE_TIME },
  sendMessageTask
);
scheduler.addSimpleIntervalJob(sendMessageJob);

// bots
AttractAttentionBot.runBot().then((_) => {
  console.log("AttractAttentionBot is up, if anyone cares");
});

// GET
app.get("/status", getWorkStatus);

// POST
app.post("/changeConfig", changeConfig);
app.post("/postMessage", hardPostMessage);

// listener
app.listen(PORT, (): void => {
  console.log(`Server running on port here 👉 ${PORT}`);
});
