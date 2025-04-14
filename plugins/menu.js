const { Command } = require("../lib/");

Command({
    pattern: "menu",
    type: "user",
    fromAdmin: true // You can change this to false if you want all users to access the menu
}, async (message, match) => {
    const menuText = `
╭────────❒⁠⁠⁠⁠ *PAID TECH SYSTEM* ➣
│➣│▸ Ping
│➣│▸ Runtime
│➣│▸ Jid
│➣│▸ Enc
│➣│▸ Pkg
│➣│▸ Install 
│➣│▸ Beautify
╰────────❍─────❍❍➣
╭────────❒⁠⁠⁠⁠ *PAID TECH* ➣
│➣│▸ MENU
│➣│▸ HELP
│➣│▸ SETTINGS
 ╰────────❍─────❍❍➣
╭────────❒⁠⁠⁠⁠ *PAID-𝙻𝙾𝙶 𝙼𝙰𝙺𝙴𝚁* ➣
│➣│▸ LOG
╰────────❍─────❍❍➣ 
╭────────❒⁠⁠⁠⁠ *PAID TECH SOCIAL* ➣
│➣│▸ TIKTOK
│➣│▸ SONG
│➣│▸ VIDEO 
╰────────❍─────❍❍➣
╭────────❒⁠⁠⁠⁠ *PAID TECH AI* ➣
│➣│▸ GPT
╰────────❍─────❍❍➣
 ╭────────❒⁠⁠⁠⁠ *PAID TECH +18* ➣
│➣│▸ HNEKO
│➣│▸ HWAIFU
╰────────❍─────❍❍➣ 


  > © 𝑀𝐴𝐷𝐸 𝐵𝑌 𝑇𝐶𝑅𝑂𝑁𝐸𝐵 𝐻𝐴𝐶𝐾𝑆🤍 `;    await message.reply(menuText, { parse_mode: "Markdown" });
});
