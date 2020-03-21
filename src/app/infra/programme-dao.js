class ProgrammeDao {

    constructor(db) {
        this._db = db;
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM PROGRAMMES',
                (erro, resultados) =>{
                    if (erro) return reject ('Não foi possível listar os programas!');

                    return resolve(resultados);
                }
            )
        });
    }

      
    }