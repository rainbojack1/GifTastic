//Giphy API key: nt3uXtGPz8eT3lTQYpiN0o6h56RubV6E
let topicArr = ["Michael Jordan", "Larry Bird", "Lebron James", "Kobe Bryant", "Simone Biles", "Shannon Miller", "Gabby Douglas", "Ussain Bolt", "Carl Lewis", "Florence Griffth Joyner", "Tiger Woods", "Phil Mickelson", "Venus Williams", "Serena Williams", "Rafael Nadal", "Naomi Osaka", "David Beckham", "Lionel Messi"]
let stillGif;
let animatedGif;


function createBtns() {
    $("#topic-btns").empty();
    for (let i = 0; i < topicArr.length; i++) {
        $("#topic-btns").append('<button type="button" class="btn btn-primary athlete-btn">' + topicArr[i] + '</button>');
    }
    
}

$(document).on("click", ".athlete-btn", function () {
    $("#gifs").empty();
    //$("img").empty();
    let athlete = $(this).text();
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athlete + "&api_key=dc6zaTOxFJmzC&limit=10";

    console.log("athlete-btn athelete: ", athlete);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("queryURL: ", queryURL);
        console.log(response);
        let results = response.data;

        for(var j = 0; j < 10; j++){
            stillGif = results[j].images.fixed_height_still.url;
            animatedGif = results[j].images.fixed_height.url;
            let gif = $("<img>");
            gif.attr("src", stillGif);
            gif.attr("data-still", stillGif);
            gif.attr("data-animate", animatedGif);
            gif.attr("data-state", "still");
            
            $("#gifs").append(gif);
        }
        //add a click listener to img
        $(document).on("click", "img", function () {
            let state = $(this).attr("data-state");
           
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }
            else if (state === "animate") {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
            
        });
        
    });
});

$("#find-search-term").click(function(event){
    event.preventDefault();
    searchNewAthlete();
});

function searchNewAthlete(){
    let newAthlete = $("#search-input").val().trim();
    console.log("newAthlete: ", newAthlete);
    if(topicArr.indexOf(newAthlete) === - 1){
        topicArr.push(newAthlete);
    }

    $("#search-input").val("");
    
    createBtns();
}


createBtns();
