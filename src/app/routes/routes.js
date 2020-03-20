
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
        resp.marko(
            require('../views/programmes/list/list.marko'),
            {
                programmes: [
                    {
                        id : 1,
                        titulo: 'programa 1'
                    },
                    {
                        id: 2,
                        titulo: 'programa 2'
                    }
                ]
            }
        );
    });

}
