// imports
const axios = require("axios").default;
require("dotenv").config();


let listenersArr = []
// async await function om de data op te roepen en te filteren
async function getApi() {
    await axios(process.env.API_KEY)
        .then(function (res) {
            let getData = res.data.topartists.artist;
            let showArtists = getData.map((data) => data);
            showArtists.map(artist => {
                const listeners = artist.listeners;
                if (typeof listeners === 'string') {
                    listenersArr.push(listeners);
                }
            });
            cleanData(listenersArr);
        });
}

// Values omzetten naar numbers en dan LocaleString om decimalen toe te voegen.Direct daarna zet ik hem weer terug naar numbers
function cleanData(listenersArr) {
    let newListenersArr = listenersArr;
    let StrToNum = newListenersArr.map((i) => Number(i));
    StrToNum = StrToNum.sort((a, b) => b - a);
    console.log(StrToNum);
    StrToNum = Object.values(StrToNum);
}

getApi();