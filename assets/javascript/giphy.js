//Giphy API key: nt3uXtGPz8eT3lTQYpiN0o6h56RubV6E
let topicArr = ["Michael Jordan", "Larry Bird", "Lebron James", "Kobe Bryant", "Simone Biles", "Shannon Miller", "Gabby Douglas", "Ussain Bolt", "Carl Lewis", "Florence Griffth Joyner", "Tiger Woods", "Phil Mickelson", "Venus Williams", "Serena Williams", "Rafael Nadal", "Naomi Osaka", "David Beckham", "Lionel Messi"]




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
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athlete + "&api_key=dc6zaTOxFJmzC&limit=1";

    console.log("athlete-btn athelete: ", athlete);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("queryURL: ", queryURL);
        console.log(response);
        let results = response.data;
        let stillGif = results[0].images.fixed_height_still.url;
        let animatedGif = results[0].images.fixed_height.url;
        let gif = $("<img>");
        gif.attr("src", stillGif);
        gif.attr("data-state", "still");
        gif.attr("data-name", athlete);

        $("#gifs").append(gif);

        //add a click listener to img
        $(document).on("click", "img", function () {
            let state = $(this).attr("data-state");
           
            if (state === "still") {
                $(this).attr("src", animatedGif);
                $(this).attr("data-state", "animate");
            }
            else if (state === "animate") {
                $(this).attr("src", stillGif);
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
    topicArr.push(newAthlete);
    createBtns();
}


createBtns();
