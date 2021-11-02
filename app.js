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
function countData(stripData) {
  let ocr = stripData.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  refactorData(ocr);
}

function refactorData(ocr) {
  const stringData = JSON.stringify(ocr);
  const parseData = JSON.parse(stringData);
  sortData(parseData);
}

function sortData(parseData) {
  let sorting = Object.values(parseData);
  sorting.sort(function (a, b) {
    return b - a;
  });
  WriteToDOM(sorting);
}

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

// Add the contents of options[0] to #foo:

// function mapArr(sorting) {
//   let mappedInArr = Object.entries(sorting).reduce(
//     (obj, [_key, _value]) => Object.assign(obj, { [_key]: String(_value) }),
//     {}
//   );
// }
// // const merged = [].concat.apply([], mapArr);

// function makeUL(array) {
//   const list = document.createElement("ul");

//   for (let i = 0; i < array.length; i++) {
//     const item = document.createElement("li");
//     item.appendChild(document.createTextNode(array[i]));
//     list.appendChild(item);
//   }
//   return list;
// }
// document.getElementById("app").appendChild(makeUL(mapArr[0]));

// // console.log(OrganizeData);
// console.log(JSON.stringify(mapArr, null, "\t"));

getData();

// console.log(ParseData);
// let SortData = Object.entries(ParseData);
// SortData.sort(function (a, b) {
//   return b - a;
// });
// console.log(occurrences);
// const result = Object.entries(occurrences);

// let arr = [];
// arr.push(ParseData);
// console.log(arr);

// if (typeof arr === "object") {
//   console.log("hello");
// } else {
//   console.log("niet");
// }

// if (typeof arr === "object" && arr !== null) {
//   console.log("hello");
// }

// Printing values
// for (var i = 0; i < result.length; i++) {
//   for (var z = 0; z < result[i].length; z++) {
//     document.write(result[i][z] + " ");
//   }
//   document.write("</br>");
// }
// console.log(result);

// console.log(SortData);
// console.log(JSON.stringify(ParseData, null, "\t"));

// let test = Object.keys(SortData);
// let testTwee = Object.keys(ParseData);
// console.log(testTwee);
// console.log(test);
