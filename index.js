const { Telegraf } = require('telegraf');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual Telegram Bot token
const botToken = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new Telegraf(botToken);

// Handle the /start command
bot.start((ctx) => {
  const welcomeMessage = `Welcome to Scan AI! 🚀\n\nExplore the decentralized world seamlessly on Telegram.\n\n— Website: [https://scanaieth.xyz](https://scanaieth.xyz)\n— Docs: [https://docs.scanaieth.xyz](https://docs.scanaieth.xyz)\n— Medium: [https://scanai.medium.com/scan-ai-your-gateway-to-seamless-multi-chain-blockchain-exploration-on-telegram-086fba04d030](https://scanai.medium.com/scan-ai-your-gateway-to-seamless-multi-chain-blockchain-exploration-on-telegram-086fba04d030)`;

  ctx.reply(welcomeMessage);
});

// Handle errors
bot.catch((err, ctx) => {
  console.error(`Error for ${ctx.updateType}`, err);
});

// Start the bot
bot.launch()
  .then(() => {
    console.log('Scan AI bot is running');
  })
  .catch((err) => {
    console.error('Error starting Scan AI bot', err);
  });
