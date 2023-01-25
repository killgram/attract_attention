import { Config, Keys } from "../../configuration";
import { FirebaseService } from "../../services";
import { randomizer, timeLogic } from "../../utils";

const runBot = async () => {
  Config.AttractAttentionBotInstance.start((ctx: any) =>
    ctx.reply(Config.normalMessage)
  );
  await Config.AttractAttentionBotInstance.launch();
};

const sendMessage = async () => {
  const config = await FirebaseService.getConfigService();
  const isExist = timeLogic(
    config?.timeSend,
    config?.end_send,
    config?.start_send,
    config?.isWork
  );
  if (isExist) {
    if (randomizer(new Date().getHours() === config?.end_send)) {
      console.log("send");
      // sendViaBot(config?.chat_id).then((_) => {
      //   console.log("Success send message");
      // });
    }
  }
};

const sendViaBot = async (chatId: number) => {
  await Config.AttractAttentionBotInstance.telegram.sendMessage(chatId, "test");
};

export { runBot, sendMessage };
