//Onclick event to activate the ajax request and 'then' run the function to display the articles
$("#searchBtn").on("click", function(){

    var search = $("#search").val().trim();
    var limit = $("#limit").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    
    var APIKey = "zv3jd06V7WOa0zWVKy2fSAeLP9hSZEO8";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&api-key="+APIKey+"&limit="+limit;
    
    $.ajax ({
    url: queryURL,
    METHOD: "GET"
    }).then(function(response){
        console.log(response.response);
    
    }) 

})

//Onclick event to clear the Top Articles div
$("#clearBtn").on("click", function(event){
    event.preventDefault();
    $("#topArticlesDiv").empty();
})
