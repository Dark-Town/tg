const { Command } = require("../lib/");

Command({
    pattern: "animewallpaper",
    type: "user",
    fromAdmin: false // Allow all users to use this command
}, async (message, match) => {
    const prompt = match[1]; // Assumes the prompt is passed as the first argument after the command

    if (!prompt) {
        return await message.reply("Please provide a prompt for the anime wallpaper.nUsage: /animewallpaper <your_prompt>");
    }

    // Create the URL for generating the wallpaper
    const wallpaperUrl = https://bk9.fun/ai/magicstudio?prompt=${encodeURIComponent(prompt)};

    // Send the generated link to the user
    await message.reply(Here is your anime wallpaper link:n${wallpaperUrl});
});
