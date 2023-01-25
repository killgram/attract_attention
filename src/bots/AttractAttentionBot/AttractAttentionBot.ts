import { Config, Keys } from "../../configuration";

const runBot = async () => {
  Config.AttractAttentionBotInstance.start((ctx: any) => ctx.reply("Welcome"));
  await Config.AttractAttentionBotInstance.launch();
};

const sendMessage = async () => {
  await Config.AttractAttentionBotInstance.telegram.sendMessage(
    Keys.CHAT_ID,
    "test"
  );
};

export { runBot, sendMessage };
