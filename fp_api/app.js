// imports
const axios = require("axios").default;
const api = require("./modules/api");

async function getUser() {
    await axios(api.url)
        .then(function (res) {
            let getData = res.data.topartists.artist;
            let showArtists = getData.map((data) => data);
            console.log(showArtists);
        });
}
getUser();