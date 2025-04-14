
const { Command } = require("../lib/");
const fetch = require("node-fetch"); // Make sure to install node-fetch if you haven't already

Command({
    pattern: "tiktok",
    type: "user",
    fromAdmin: false // Allow all users to use this command
}, async (message, match) => {
    // Extract the TikTok URL from the message
    const url = match[1]; // Assumes the URL is passed as the first argument after the command

    if (!url) {
        return await message.reply("Please provide a valid TikTok video URL.nUsage: /tiktok <video_url>");
    }

    try {
        // Call the TikDown API to download the video
        const response = await fetch(https://tikdown-api-sandy.vercel.app/api/download?url=${encodeURIComponent(url)});
        const data = await response.json();

        // Check if the response contains a download URL
        if (data.success && data.downloadUrl) {
            await message.reply(Here is your TikTok video download link:n${data.downloadUrl});
        } else {
            await message.reply("Sorry, I couldn't retrieve the video. Please check the URL and try again.");
        }
    } catch (error) {
        console.error(error);
        await message.reply("An error occurred while trying to download the video. Please try again later.");
    }
});
