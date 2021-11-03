// Process:
// 1. import data
// 2. call data
// 3. clean data
// 4. Count & Sort data
// 5. Write results to the DOM

// Call json with an async import
// Asnyc is more usable when working with json, more info here: https://github.com/tc39/proposal-json-modules
const { default: data } = await import("./data.json", {
  assert: {
    type: "json",
  },
});

// Loop through dataset and find answers of specific question
function getData() {
  let dataSet = data.map(function (dataSet) {
    return dataSet["Wat wil je worden als je groot bent?"];
  });
  cleanData(dataSet);
}

// Loop through answers, strip them and replace specific answers, empty strings get own value
function cleanData(dataSet) {
  let stripData = dataSet.map(function (dataSet) {
    if (typeof dataSet === "string" && dataSet.length > 1) {
      dataSet = dataSet
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
      return dataSet.charAt(0).toUpperCase() + dataSet.slice(1);
    } else {
      return "Geen antwoord";
    }
  });
  countData(stripData);
}

// Count data, based on amount of equal values
function countData(stripData) {
  let ocr = stripData.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  refactorData(ocr);
}

// String the Javascript Object from above and parse it to make an Array out of it
function refactorData(ocr) {
  const stringData = JSON.stringify(ocr);
  const parseData = JSON.parse(stringData);
  sortData(parseData);
}

// Sort the data, based on the highest amount of value to the lowest
function sortData(parseData) {
  let sorting = Object.values(parseData);
  sorting.sort(function (a, b) {
    return b - a;
  });
  WriteToDOM(sorting);
}

// Write all the results to the DOM
function WriteToDOM(sorting) {
  function makeUL(array) {
    let list = document.createElement("ul");
    for (let i = 0; i < array.length; i++) {
      let item = document.createElement("li");
      item.appendChild(document.createTextNode(array[i]));
      list.appendChild(item);
    }
    return list;
  }
  document.getElementById("app").appendChild(makeUL(sorting));
}

getData();
