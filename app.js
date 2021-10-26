const {
    default: json
} = await import("./data.json", {
    assert: {
        type: "json"
    }
});

function cleanData() {
    let dataSet = json.map(function (json) {
        return json["Wat wil je worden als je groot bent?"];
    });
    console.log(dataSet);
}
cleanData();