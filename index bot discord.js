var Discord = require("discord .js");
var Client = new Discord.Client({intents: []});

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("OTA0Njk0NzcyMzQ0Njk2ODMy.YX_Qqg.Aw1S1UEit06HLsdO74pDmJktrmE");