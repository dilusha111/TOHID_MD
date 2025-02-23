const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "bBAWkACD#ChhRz1xKUb_E4EAVfya9JCseorHL29wX_vDaRVsDW-Y",
    CAPTION: process.env.CAPTION || "POWERED BY TOHID BADIYA",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://capcuttemplatez.com/wp-content/uploads/2024/08/real-girl-pfp_4.webp",
    ALIVE_MSG: process.env.ALIVE_MSG || "> HI LACCANA LAMAYOHHHHH 💗 මෙ ඉන්නෙ මම ඔයාගේත් PHOTO එක්ක දාන්න හදුනගන්න 🥲",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "➺ᴛᴏʜɪᴅ ᴋʜᴀɴ࿐",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
