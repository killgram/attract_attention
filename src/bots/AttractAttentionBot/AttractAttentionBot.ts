import { Config, Keys } from "../../configuration";
import { FirebaseService } from "../../services";

const runBot = async () => {
  Config.AttractAttentionBotInstance.start((ctx: any) =>
    ctx.reply(Config.normalMessage)
  );
  await Config.AttractAttentionBotInstance.launch();
};

const sendMessage = async () => {
  const config = await FirebaseService.getConfigService();
  console.log(config);
};

const sendViaBot = async () => {
  await Config.AttractAttentionBotInstance.telegram.sendMessage(
    Keys.CHAT_ID,
    "test"
  );
};

export { runBot, sendMessage };
