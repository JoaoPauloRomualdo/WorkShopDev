const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./WorkShopDev.db');

db.serialize(function () {
    //CRIAR A TABELA
    db.run(`
        CREATE TABLE IF NOT EXISTS ideias(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

//========   //INSERIR DADOS NA TABELA
    // const query =`
    // INSERT INTO ideias(
    //     image,
    //     title,
    //     category,
    //     description,
    //     link
    // ) VALUES (?,?,?,?,?);
    // `
    // const values =[
    //     "https://image.flaticon.com/icons/svg/2729/2729021.svg",
    //     "Jogar video Game",
    //     "Entretenimento",
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //     "https://rocketseat.com.br"
    // ]

//=======   //CONSULTAR DADOS NA TABELA

    // //ASSIM QUE INSERE OS DADOS ELE MOSTRA SE DEU CERTO OU NÃO NO TERMINAL
    //  db.run(query, values, function(err){
    //      if(err) return console.log(err)

    //      console.log(this);
    //  })

//  db.all(`SELECT * FROM ideias`, function(err, rows){
//      if(err) return console.log(err)

//      console.log(rows)
//     })

// })

//PARA USAR O BANCO DENTRO DA APLICAÇÃO
module.exports = db




































// // //DELETAR DADOS DE UMA TABELA
// db.run(`DELETE FROM ideias  WHERE id= ?`, [7], function (err) {
//     if (err) return console.log(err)

//     console.log("DELETADO", this)

})