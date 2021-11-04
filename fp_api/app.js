// imports
const axios = require("axios").default;
require("dotenv").config();



let artists = [];
// async function getApi() {
//     await axios(process.env.API_URL)
//     try {
//         (function (res) {
//             let getData = res.data.topartists.artist;
//             let showArtists = getData.map((data) => data);
//             showArtists.forEach(artist => {
//                 let listeners = artist.listeners;
//                 cleanData(listeners);
//                 console.log(listeners);
//             });
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }

function cleanData(listeners) {
    console.log(Math.abs(Number(listeners)) >= 1.0e+6);
}


getApi();