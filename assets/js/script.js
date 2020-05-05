
var response = {
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
        "pages": "1",
        "position": "Full Stack Web Developer",
        "city": "75228"
    }
}

$.ajax(response).done(function (response) {

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


    $(document).ready(function () {
        $("#results").append("<br>" + "<strong>Company: </strong>" + response.jobs[0].company + "<br>");
        $("#results").append("<br>" + "<strong>Job ID: </strong>" + response.jobs[0].job_id + "<br>");
        $("#results").append("<br>" + "<strong>Location: </strong>" + response.jobs[0].location + "<br>");
        $("#results").append("<br>" + "<strong>Description: </strong>" + response.jobs[0].description + "<br>");

    });




});








