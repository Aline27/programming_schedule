
module.exports = (app) => {

    app.get('/', function(req, resp) {

        var data = new Date();

        var request = require('request');
        request('https://epg-api.video.globo.com/programmes/1337?date='+data.getFullYear()+'-'+data.getMonth()+'-'+data.getDate(), function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        var parsedFile = JSON.parse(body);

        programmes_dict = parsedFile['programme']['entries']
        for (var i=0; i< programmes_dict.length; i++){

            fullhour= programmes_dict[i].human_start_time.split(":00+")
            programmes_dict[i].human_start_time = fullhour[0]
        }

        resp.marko(
            require('../views/programmes/list/list.marko'),
            {                   
                programmes: programmes_dict,
                        
            }
        );
        }); 

    });

    app.post('/', function(req, resp) {

        var data_user = req.body.date;
   
        var request = require('request');

        request('https://epg-api.video.globo.com/programmes/1337?date='+data_user, function (error, response, body) {

        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        var parsedFile = JSON.parse(body);

        programmes_dict = parsedFile['programme']['entries']
        for (var i=0; i< programmes_dict.length; i++){
            fullhour= programmes_dict[i].human_start_time.split(":00+")
            programmes_dict[i].human_start_time = fullhour[0]
        }

        resp.marko(
            require('../views/programmes/list/list.marko'),
            {                   
                programmes: programmes_dict,
                        
            }
        );
        }); 

    });

   
   

}
