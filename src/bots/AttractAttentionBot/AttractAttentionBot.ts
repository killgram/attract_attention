import { Config } from "../../configuration";
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
      const data = {
        timeSend: new Date().getDate(),
        end_send: config?.end_send,
        start_send: config?.start_send,
        isWork: config?.isWork,
        chat_id: config?.chat_id,
      };
      await FirebaseService.updateTimeSend(data);
      // sendViaBot(config?.chat_id).then((_) => {
      //   console.log("Success send message");
      // });

      console.log("send");
    }
  }
};

const sendViaBot = async (chatId: number) => {
  await Config.AttractAttentionBotInstance.telegram.sendMessage(chatId, "test");
};

export { runBot, sendMessage };
