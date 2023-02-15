import express, { Application } from "express";
import cors from "cors";

const { ToadScheduler, SimpleIntervalJob, Task } = require("toad-scheduler");
import { AttractAttentionBot } from "./bots";
import { Constants } from "./configuration";

const app: Application = express();
const PORT = process.env.PORT || 9987;

// modules
import {
  getWorkStatus,
  changeConfig,
  hardPostMessage,
  getConfig,
} from "./modules";

// middleware
import { verificationKey, getKeyVerification } from "./middleware";

// configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// scheduler
const scheduler = new ToadScheduler();
const sendMessageTask = new Task("send message", () =>
  AttractAttentionBot.sendMessage()
);
const sendMessageJob = new SimpleIntervalJob(
  { minutes: Constants.UPDATE_TIME },
  sendMessageTask
);
scheduler.addSimpleIntervalJob(sendMessageJob);

// bots
AttractAttentionBot.runBot().then((_) => {
  console.log("AttractAttentionBot is up, if anyone cares");
});

// GET
app.get("/status", getWorkStatus);
app.get("/attractAttentionBot/getConfig", getKeyVerification, getConfig);

// POST
app.post("/attractAttentionBot/changeConfig", verificationKey, changeConfig);
app.post("/attractAttentionBot/postMessage", verificationKey, hardPostMessage);

// listener
app.listen(PORT, (): void => {
  console.log(`Server running on port here 👉 ${PORT}`);
});
