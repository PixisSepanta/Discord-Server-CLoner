const axios = require("axios");
const imageToBase64 = require("image-to-base64");
const { getGuildRoles } = require("./utils.js");

module.exports = async function (serverId) {
  const { data: guildInfo } = await axios.get(
    `https://discord.com/api/v9/guilds/${serverId}`,
    {
      headers: {
        authorization: process.env.TOKEN,
        "content-type": "application/json",
      },
    }
  );

  const { data } = await axios.post(
    `https://discord.com/api/v9/guilds`,
    {
      name: guildInfo.name,
      icon:
        "data:image/png;base64," +
        (await imageToBase64(
          `https://cdn.discordapp.com/icons/${guildInfo.id}/${guildInfo.icon}.png?size=240`
        )),
      roles: await getGuildRoles(guildInfo.id),
    },
    {
      headers: {
        authorization: process.env.TOKEN,
        "content-type": "application/json",
      },
    }
  );

  return data.id;
}
