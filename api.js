//$(document).ready(function(){

    var title = "post-malone"
    var queryURL = "https://en.wikipedia.org/api/rest_v1/page/media-list/" +muscician+ "?redirect=false";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
 
    
    var tRow = $("<tr>");

    var musicianTd = $("<td>").text(response.title);

    tRow.append(musicianTd);
    // Append the table row to the table body
    $("tbody").append(tRow);

});
















//})