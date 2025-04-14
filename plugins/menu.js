const { Command } = require("../lib/");

Command({
    pattern: "menu",
    type: "user",
    fromAdmin: true // You can change this to false if you want all users to access the menu
}, async (message, match) => {
    const menuText = `
*Available Commands:*
1. /ping - Check the bot's responsiveness.
2. /help - Get help with using the bot.
3. /info - Get information about the bot.
4. /settings - Change your user settings.
5. /about - Learn more about this bot.

*Note:* Use the command prefix before each command.
`;

    await message.reply(menuText, { parse_mode: "Markdown" });
});
