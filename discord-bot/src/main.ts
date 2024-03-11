import { createBot, Intents, startBot } from "discordeno"
import { ENV } from "./env.ts"
import { oki, neru } from "./alarm.ts"
import { USERNAME, DURATION } from "./consts.ts"

const bot = createBot({
  token: ENV.DISCORD_TOKEN,
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
  events: {
    ready: (_bot, payload) => {
      console.log(`${payload.user.username} is ready!`)
    },
  },
})

bot.events.messageCreate = async (b, message) => {
  if (message.content === "!oki") {
    const ok = await oki();
    const content = ok ? ` ${USERNAME} の部屋の目覚まし時計を鳴らしました！` : "目覚まし時計を鳴らすのに失敗しました"
    if (ok) {
      b.helpers.sendMessage(message.channelId, {
        content: content,
      })
      setTimeout(neru, DURATION);
    }
  }
}

await startBot(bot)
