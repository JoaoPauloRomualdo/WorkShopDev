//usei o expres pra criar e configurar o server
const express = require('express');
const server = express();

//cofigurar arquivos estaticos(css/js)
server.use(express.static("public"));

// cofiguração do nunjucks
const nunjucks = require('nunjucks');



const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercicio",
        category: "Saude",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        url: "https://rocketseat.com.br"
    },
    
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729028.svg",
        title: "Fazer Churrasco",
        category: "Culinaria",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729021.svg",
        title: "Jogar video Game",
        category: "Entretenimento",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2232/2232483.svg",
        title: "Ler um Livro",
        category: "Educação",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        url: "https://rocketseat.com.br"
    },


]


nunjucks.configure("views", {
    express: server,
    noCache: true, //para nao fazer caches
})

//foi criado uma rota /
//e capturado o pedido do cliente
server.get("/", function (req, res) {

    const reversedIdeas = [...ideas].reverse();

    let lastIdeias =[]
    for(idea of reversedIdeas){
        if(lastIdeias.length < 2){
            lastIdeias.push(idea)
        }
    }

    return res.render("index.html", {ideas: lastIdeias})
})


server.get("/ideias", function (req, res) {
    const reversedIdeas = [...ideas].reverse();

    return res.render("ideias.html",{ideas: reversedIdeas})
})


//liga o server na porta 300
server.listen(3000)

