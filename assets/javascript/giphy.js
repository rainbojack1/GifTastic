//Giphy API key: nt3uXtGPz8eT3lTQYpiN0o6h56RubV6E
let topicArr = ["Michael Jordan", "Larry Bird", "Lebron James", "Kobe Bryant", "Simone Biles", "Shannon Miller", "Gabby Douglas", "Ussain Bolt", "Carl Lewis", "Florence Griffth Joyner", "Tiger Woods", "Phil Mickelson", "Venus Williams", "Serena Williams", "Rafael Nadal", "Naomi Osaka", "David Beckham", "Lionel Messi"]

let athlete = "";
let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athlete + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    var results = response.data;
    let gif = $("<img>");
    gif.attr("src", results[0].images.fixed_height.url);
    $("#gifs").append(gif);
});