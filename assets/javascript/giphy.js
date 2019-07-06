//Giphy API key: nt3uXtGPz8eT3lTQYpiN0o6h56RubV6E
let topicArr = ["Michael Jordan", "Larry Bird", "Lebron James", "Kobe Bryant", "Simone Biles", "Shannon Miller", "Gabby Douglas", "Ussain Bolt", "Carl Lewis", "Florence Griffth Joyner", "Tiger Woods", "Phil Mickelson", "Venus Williams", "Serena Williams", "Rafael Nadal", "Naomi Osaka", "David Beckham", "Lionel Messi"]




function createBtns(){
    for(let i = 0; i < topicArr.length; i++){
        $("#topic-btns").append('<button type="button" class="btn btn-primary athlete-btn">' + topicArr[i] + '</button>');
    }
    //populateGifs();
    //get the value of a textbox using $("#id").val().trim();
}

$(document).on("click", ".athlete-btn", function(){
    console.log("value= " + $(this).text());
    let athlete = $(this).text();
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athlete + "&api_key=dc6zaTOxFJmzC&limit=1";

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
});

/*function populateGifs(){
    $(".athlete-btn").on("click", function(){
        console.log(this.getAttribute('data-name'));
        
    })
}*/

createBtns();
