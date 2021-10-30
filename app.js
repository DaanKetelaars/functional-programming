// Call json with an async import
// Asnyc is more usable when working with json, more info here: https://github.com/tc39/proposal-json-modules
const { default: jsonData } = await import("./data.json", {
  assert: {
    type: "json",
  },
});

// Loop through dataset and find answers of specific question
let DataSet = jsonData.map((jsonData) => {
  return jsonData["Wat wil je worden als je groot bent?"];
});
// Loop through answers, strip them and replace specific answers, empty strings get own value
let StripData = DataSet.map((jsonData) => {
  if (typeof jsonData === "string" && jsonData.length > 1) {
    jsonData = jsonData
      .toLowerCase()
      .replaceAll(/[^\w\s]/gi, "")
      .replaceAll("frontend", "front-end")
      .replace(
        /code designer|front-ender|webdeveloper  webdesigner/gi,
        "front-end developer"
      )
      .replace(
        "lead bij een design agency of zelfstandig ondernemer",
        "Ondernemer"
      )
      .replace("full time kunnen reizen", "reizen")
      .replace(
        /geen idee we zien wel hoe het loopt|geen idee/gi,
        "Geen antwoord"
      )
      .replace(/rijk|multimiljonair/gi, "welvarend")
      .replace("fietsen maken", "fietsenmaker");
    return jsonData.charAt(0).toUpperCase() + jsonData.slice(1);
  } else {
    return "Geen antwoord";
  }
});
// console.log(StripData);

let occurrences = StripData.reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
}, {});

let newArr = [];
let ShowData = JSON.stringify(occurrences);
let ParseData = JSON.parse(ShowData);
// console.log(ParseData);

let htmlString = [];
htmlString.push(Object.entries(ParseData));
console.log(htmlString);
// let i = htmlString.push(Object.entries(ParseData));
// for (let i in ParseData) {
//   htmlString.push(ParseData[i]);
// }

// for (let i = 0; i < ParseData.length; i++) {
//   if (ParseData[i]) {
//     htmlString.push(ParseData);
//   }
// }

let app = (document.getElementById("app").innerHTML = htmlString);
