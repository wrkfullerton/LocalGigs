
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://indeed9.p.rapidapi.com/search",
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "indeed9.p.rapidapi.com",
        "x-rapidapi-key": "4baffcd784msh949913134da149ep161ff1jsnabed21be07b4",
        "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
        "page": "1",
        "position": "Full Stack Web Developer",
        "city": "Dallas, TX"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response.jobs)
    console.log(response.jobs[0].company);
    console.log(response.jobs[0].job_id);
    console.log(response.jobs[0].location);
    console.log(response.jobs[0].description);
    console.log(response.jobs[1].company);
    console.log(response.jobs[1].job_id);
    console.log(response.jobs[1].location);
    console.log(response.jobs[1].description);
    console.log(response.jobs[2].company);
    console.log(response.jobs[2].job_id);
    console.log(response.jobs[2].location);
    console.log(response.jobs[2].description);
    console.log(response.jobs[3].company);
    console.log(response.jobs[3].job_id);
    console.log(response.jobs[3].location);
    console.log(response.jobs[3].description);
    console.log(response.jobs[4].company);
    console.log(response.jobs[4].job_id);
    console.log(response.jobs[4].location);
    console.log(response.jobs[4].description);
    console.log(response.jobs[5].company);
    console.log(response.jobs[5].job_id);
    console.log(response.jobs[5].location);
    console.log(response.jobs[5].description);
    console.log(response.jobs[6].company);
    console.log(response.jobs[6].job_id);
    console.log(response.jobs[6].location);
    console.log(response.jobs[6].description);
    console.log(response.jobs[7].company);
    console.log(response.jobs[7].job_id);
    console.log(response.jobs[7].location);
    console.log(response.jobs[7].description);
    console.log(response.jobs[8].company);
    console.log(response.jobs[8].job_id);
    console.log(response.jobs[8].location);
    console.log(response.jobs[8].description);

});

// }).then(function (response) {

//     var resultsDiv = $("<div class='results'>");

//     var jobs = console.log(response.jobs[0].company);

//     var pOne = $("<p>").text("Results: " + jobs);

//     resultsDiv.append(pOne);


// });

// THIS IS FREE BUT REQUIRES THAT YOU SIGN UP FOR A PUBLISHER KEY THROUGH INDEED
// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://indeed-indeed.p.rapidapi.com/apigetjobs?v=2&format=json",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "indeed-indeed.p.rapidapi.com",
// 		"x-rapidapi-key": "4baffcd784msh949913134da149ep161ff1jsnabed21be07b4"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });




