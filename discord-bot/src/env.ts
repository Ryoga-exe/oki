import { load } from "dotenv"

await load({
  envPath: ".env.local",
  examplePath: ".env.example",
  export: true,
});

export const ENV = {
  DISCORD_TOKEN: Deno.env.get("DISCORD_TOKEN")!,
  SWITCHBOT_TOKEN: Deno.env.get("SWITCHBOT_TOKEN")!,
  ALARM_DEVICE_ID: Deno.env.get("ALARM_DEVICE_ID")!,
} as const;
