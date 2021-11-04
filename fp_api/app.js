// imports
const axios = require("axios").default;
require("dotenv").config();


let arr = [];

async function getApi() {
    await axios(process.env.API_URL)
        .then(function (res) {
            let getData = res.data.topartists.artist;
            let showArtists = getData.map((data) => data);
            showArtists.forEach(artist => {
                const listeners = artist.listeners;
                cleanData(listeners)
            });
        });
}

function cleanData(listeners) {
    let StrToNum = parseFloat(listeners).toLocaleString('de-DE');
    let cleanNum = parseFloat(StrToNum);
    console.log(cleanNum);
    sortData(cleanNum);
}



function sortData(cleanNum) {
    // sorteren met .sort()
}



getApi();