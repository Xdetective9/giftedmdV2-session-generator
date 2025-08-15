const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Xdetective_tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function Xdetective_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Xdetective = Xdetective({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Xdetective.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Xdetective.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Xdetective.ev.on('creds.update', saveCreds)
            Pair_Code_By_Xdetevtive.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Xdetective.sendMessage(Pair_Code_By_Xdetective.user.id, { text: '' + b64data });

               let Xdetective_TEXT = `
*_Pair Code Connected by Xdetective_*
*_Made With Abdullah 🤍_*
______________________________________
╔
║ *『 WOW YOU CHOOSEN Xdetective!🔥 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚══════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* https://youtube.com/@ranaabdullah-b7r?si=iZSZQaoEKVpFZCt3
║❒ *Owner:* _https://wa.me/message/NHCZC5DSOEUXB1_923288055104
║❒ *Repo:* _https://github.com/Xdetective9/xdetective
║❒ *WaGroup:* _https://whatsapp.com/channel/0029VbAmCGa0AgW9oyj1PT1V
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o_
║❒ 
╚══════════════════════╝ 
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Xdetective.user.id,{text:Xdetective_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Xdetective.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    Xdetective_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await Xdetective_PAIR_CODE()
});
module.exports = router
