// imports
const axios = require("axios").default;
require("dotenv").config();


let artists = [];
async function getApi() {
    await axios(process.env.API_URL)
        .then(function (res) {
            let getData = res.data.topartists.artist;
            let showArtists = getData.map((data) => data);
            showArtists.forEach(artist => {
                let listeners = artist.listeners;
                cleanData(listeners);
                console.log(listeners);
            });
        });
}

function cleanData(listeners) {}


getApi();