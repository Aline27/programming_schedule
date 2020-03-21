const mysql = require('mysql');
var programmes;

function get_programmes(){   
    return programmes;
}

function set_programmes(valuepass){   
    programmes = valuepass;
}

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

module.exports = (app) => {

    app.get('/', function(req, resp) {
        var getJSON = require('get-json')
        var url = 'https://epg-api.video.globo.com/programmes/1337?date=2020-03-20';
        
        getJSON(url)
        .then(function(response) {

            set_programmes(response.programme.entries);

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
   
    app.get('/insert', function(req, resp) {

        var teste = get_programmes();
        var title;
        var description;

        title = teste[5].title;
        description = teste[5].description;

        console.log(title)
        console.log(description)
            
        execSQLQuery("INSERT INTO Programmes (\n"+
        "title, description) \n"+
        " values ('"+title+"', '"+ description+ "'\n"+
        ");", resp); 


    });

        
    //create table
    app.get('/create', function(req, resp) {
        execSQLQuery("CREATE TABLE IF NOT EXISTS Programmes (\n"+
        "ID int NOT NULL AUTO_INCREMENT,\n"+
        "title varchar(20) NOT NULL,\n"+
        "description char(100) NOT NULL,\n"+
        "start_time datetime NOT NULL,\n"+
        "PRIMARY KEY (ID)\n"+
        ");", resp);

    });

    app.get('/find', function(req, resp) {

        var teste = get_programmes();
        var title;

        title = teste[4].title;

        execSQLQuery("SELECT *FROM Programmes \n"+
        "WHERE TITLE  like '"+title+"'\n"+
        ";", resp);        

    });


    

}
