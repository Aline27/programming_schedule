const mysql = require('mysql');

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'mysql669.umbler.com',
      port     : 41890,
      user     : 'rootrpc',
      password : 'rpctest123',
      database : 'schedulerpc'
    });
  
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('executou!');
    });
}

const ProgrammeDao = require('../infra/programme-dao'); 

module.exports = (app) => {

    app.get('/', function(req, resp) {
        var getJSON = require('get-json')
        var url = 'https://epg-api.video.globo.com/programmes/1337?date=2020-03-20';
        
        getJSON(url)
        .then(function(response) {
            resp.marko(
                require('../views/programmes/list/list.marko'),
                {                   
                    programmes: response.programme.entries,
                         
                }
            );
        }).catch(function(error) {
            console.log(error);
        });

    });

    // app.get('/schedule', (req, res) => {
    //     execSQLQuery("CREATE TABLE IF NOT EXISTS Clientes (\n"+
    //     "ID int NOT NULL AUTO_INCREMENT,\n"+
    //     "Nome varchar(150) NOT NULL,\n"+
    //     "CPF char(11) NOT NULL,\n"+
    //     "PRIMARY KEY (ID)\n"+
    //     ");", res);

    // });
    

}
