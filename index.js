const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const prefix = "!";


const data = new SlashCommandBuilder()
.setName("go")
.setDescription("ok l'insaisissable !");


Client.on("ready", () => {
    console.log("bot opérationnel");

    //Client.application.commands.create(data);
    Client.guilds.cache.get("789810727728316419").commands.create(data);
});

Client.login("OTA0Njk0NzcyMzQ0Njk2ODMy.YX_Qqg._iZXLxp07tjTSJQaUwE6oVs5OWI");

Client.on("messageCreate", message => {
    if(message.author.bot) return
    if(message.channel.type == "dm") return;

    if(message.member.permissions.has("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("membre non ou mal mentionné.");
            }
            else {    
                if(mention.bannable){
                    mention.ban()
                    message.channel.send(mention.displayName + " A été banni avec succés");

                }
                else {
                    message.reply("impossible de bannir ce membre");
                }
            }
        }
        else if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else{
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a été kick avec succés.");
                }
                else {
                    message.reply("impossible de kick ce membre.");
                }
            }
        }
        else if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("membre non ou mal mentionné");
            }
            else {
                mention.roles.add("908076642558169188");
                message.channel.send(mention.displayName + " a été mute avec succés");
            }
        }
        else if(message.content.startsWith(prefix + "unmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("membre non ou mal mentionné");
            }
            else {
                mention.roles.remove("908076642558169188");
                message.channel.send(mention.displayName + " a eu la chance d'être unmute");
            }
        }
    }

    


    //!A toi de jouer
    if(message.content === prefix + "A toi de jouer"){
        message.reply("R.A.T en cours");
    }
    //help
    else if(message.content === prefix + "help"){ 
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")    
            .setTitle("Liste des commandes de discord")
            .setURL("https://discord.js.org/")
            .setAuthor("L'inssaisisable", "https://blog.myjob.company/wp-content/uploads/2018/08/Corporate-hackers.jpg", )
            .setDescription("Vous trouverez ci-dessous la liste des commandes de The Annihilator")
            .setThumbnail("https://i.imgur.com/AfFp7pu.png")
            .addField("__!help:__", "Affiche la liste des commandes")
            .addField("__!A toi de jouer:__", "vous renvoie R.A.T en cours")
            .addField("__!nbs__", "affiche nouveauté sur Brawl Star")
            .addField("__la suite arrive bientot__", "très bientot")
            .addField("__!js__", "lien jeu scratch")
            .setImage("https://image.freepik.com/vecteurs-libre/hacker-logo-esport_100659-71.jpg")
            .setTimestamp()
            .setFooter("", "https://blog.myjob.company/wp-content/uploads/2018/08/Corporate-hackers.jpg");
        
    
        
    
        message.channel.send({ embeds: [embed]});
    }
    if(message.content === prefix + "js"){
        const embed = new Discord.MessageEmbed()
            .setColor("#FFA500")
            .setTitle("jeu scratch")
            .setURL("https://scratch.mit.edu/projects/589058125/")
            .setAuthor("L'insaisissable")
            .addField("__scratch__", "voici un jeu scratch amuser vous \n (faut clicker sur jeu scratch")
            .setTimestamp()
            .setThumbnail("https://www.lasemainenumerique.be/IMG/arton1721.png?1568200989");
    
        message.channel.send({ embeds: [embed]});

    }
    
});
    
Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "go"){
            interaction.reply("ok l'insaisissable");
        }

    }
});


Client.on("guildMumberAdd", mumber =>{
    console.Discord("un nouveau membre est arrivé")
    console.log("un nouveau membre a rejoins le serveur")

Client.on("guildMumberRemove", mumber =>{
    console.Discord("quelqu'un nous a quitté")
    console.log("un membre a quitté ton serveur")
    mumber.guilds.channel.cache.find(channel => channel.id === "811480814155857930").send("bienvenue dans le serveur");

})
    
});






