// imports
const axios = require("axios").default;
require("dotenv").config();

// async await function om de data op te roepen en te filteren
async function getApi() {
    await axios(process.env.API_URL)
        .then(function (res) {
            let getData = res.data.topartists.artist;
            let showArtists = getData.map((data) => data);
            showArtists.map(artist => {
                const listeners = artist.listeners;
                cleanData(listeners)
            });
        });
}

// Values omzetten naar numbers en dan LocaleString om decimalen toe te voegen. Direct daarna zet ik hem weer terug naar numbers
function cleanData(listeners) {
    let StrToNum = parseFloat(listeners).toLocaleString('de-DE');
    let cleanNum = parseFloat(StrToNum);
    console.log(cleanNum);
    sortData(cleanNum);
}


// Uiteindelijk hier niet aan toe gekomen.
function sortData(cleanNum) {
    // sorteren met .sort()
}



getApi();