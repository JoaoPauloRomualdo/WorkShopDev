//usei o expres pra criar e configurar o server
const express = require('express');
const server = express();

//EXPORTANDO O BANCO DE DADOS
const db = require("./db");
//cofigurar arquivos estaticos(css/js)
server.use(express.static("public"));

//HABILITAR USO DO REQ.BODY
server.use(express.urlencoded({ extended: true }))

// cofiguração do nunjucks
const nunjucks = require('nunjucks');

nunjucks.configure("views", {
    express: server,
    noCache: true, //para nao fazer caches
})

//foi criado uma rota /
//e capturado o pedido do cliente
server.get("/", function (req, res) {

    db.all(`SELECT * FROM ideias`, function (err, rows) {
        if (err) {
            console.log(err)
            return res.send("FATAL ERROR")
        }


        const reversedIdeas = [...rows].reverse();

        let lastIdeias = []
        for (idea of reversedIdeas) {
            if (lastIdeias.length < 2) {
                lastIdeias.push(idea)
            }
        }

        return res.render("index.html", { ideas: lastIdeias })
    })

})

server.get("/ideias", function (req, res) {
    db.all(`SELECT * FROM ideias`, function (err, rows) {
        if (err) {
            console.log(err)
            return res.send("FATAL ERROR")
        }
        const reversedIdeas = [...rows].reverse();
        return res.render("ideias.html", { ideas: reversedIdeas })
    })
})

server.post("/", function (req, res) {
    //INSERIR DADOS NA TABELA
    const query = `
        INSERT INTO ideias(
            image,
            title,
            category,
            description,
            link
        ) VALUES (?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
    ]
    //ASSIM QUE INSERE OS DADOS ELE MOSTRA SE DEU CERTO OU NÃO NO TERMINAL
    db.run(query, values, function (err) {
        if (err) {
            console.log(err)
            return res.send("FATAL ERROR")
        }

        return res.redirect("/ideias")
    })
})


//liga o server na porta 300
server.listen(3000)

