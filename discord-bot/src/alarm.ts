import { ENV } from "./env.ts";

export async function oki() {
  const res = await fetch(
    `https://api.switch-bot.com/v1.0/devices/${ENV.ALARM_DEVICE_ID}/commands`,
    {
      method: "POST",
      body: JSON.stringify({
        "command": "ON",
        "parameter": "default",
        "commandType": "customize",
      }),
      headers: {
        "Authorization": ENV.SWITCHBOT_TOKEN,
        "Content-Type": "application/json; charset=utf8",
      },
    },
  );

  return res.status == 200;
}

export async function neru() {
  const res = await fetch(
    `https://api.switch-bot.com/v1.0/devices/${ENV.ALARM_DEVICE_ID}/commands`,
    {
      method: "POST",
      body: JSON.stringify({
        "command": "OFF",
        "parameter": "default",
        "commandType": "customize",
      }),
      headers: {
        "Authorization": ENV.SWITCHBOT_TOKEN,
        "Content-Type": "application/json; charset=utf8",
      },
    },
  );

  return res.status == 200;
}
