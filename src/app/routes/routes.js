
module.exports = (app) => {
    app.get('/', function(req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Programming schedule test </h1>
                    </body> 
                </html>
            `
        );
    });
    
    app.get('/schedule', function(req, resp) {

        var getJSON = require('get-json')
        var url = 'https://epg-api.video.globo.com/programmes/1337?date=2020-03-20';
        
        getJSON(url)
        .then(function(response) {
            resp.marko(
                require('../views/programmes/list/list.marko'),
                {                   
                    programmes: response.programme.entries              
                }
            );
        }).catch(function(error) {
            console.log(error);
        });


    });

}
