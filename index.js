const Commando = require('discord.js-commando');
const bot = new Commando.Client({commandPrefix: '!'});

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: '#play <song>',
            type: "PLAYING",
        }
    });
  });
console.log("Ready");

bot.registry.registerGroup('music', 'Music');
bot.registry.registerCommandsIn(__dirname + '/commands');
bot.registry.registerDefaults();

global.servers = {};

    bot.on('message', function(message){
        if(message.content == 'hey')
        {
            message.reply('Hippity Hoppity niggers are my property');
        }      
});
const Discord = require('discord.js');

// Start a new Client from Discord.js. You can name this to whatever you like.


// Put the Music module in the new Client object.
// This allows for easy access to all the modules
// functions and data.
bot.music = require("discord.js-musicbot-addon");

// Now we start the music module.
bot.music.start(bot, {
  // Set the api key used for YouTube.
  // This is required to run the bot.
  youtubeKey: "AIzaSyB_GNsatKjB1IBmpWs_L8xJueqCszqMC2M"
  ,botPrefix: '#'
});

// Connect the bot with your Discord applications bot token.

bot.login('MjY2NDQxMTY0OTc3MDc4Mjcy.D024gQ.dSBAXOPL3E0zidil7JUQqRVtTzc');
    
