const { Telegraf } = require('telegraf');
const bot = new Telegraf('1287574117:AAF29B0EfO17s4ApQzXKQIhAomQJc_J-xjo');
bot.start((ctx) => {
  ctx.reply('Please send us a screenshot 📄 of your payment 💰 and your phone ☎️ number. We will contact you ASAP. Thank you very much, and we will see you in the course!😻😽');
  ctx.replyWithSticker('CAACAgIAAxkBAAKG5F_cbrrw__ecLqMM6mBqQ06l40fOAAIIAAPp2BMoePnrnGhu-XEeBA');
});

bot.launch();
