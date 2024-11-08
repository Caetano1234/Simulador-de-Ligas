//Variaveis do HTML
var YearHTML = document.getElementById("year");
var SimulationDiv = document.getElementById("simulation");
//Variaveis Comuns
var Year = 2024;
var Table = 0;
var BeforeSimulados = 0;
var Simulados = 1;
//Variaveis Ligas
var Ligas = [
    [
        "Inglaterra",
        [
            "King's League (ING 1)",
            1000000000,
            {
                Nome: "Deadfool",
                Poder: 87,
                Dinheiro: 7500000000,
                Jogadores:[],
            },
            {
                Nome: "Chanmenster City",
                Poder: 93,
                Dinheiro: 25000000000,
                Jogadores:[],
            },
            {
                Nome: "Pistols & Guns",
                Poder: 88,
                Dinheiro: 2500000000,
                Jogadores:[],
            },
            {
                Nome: "Limberham Vila",
                Poder: 82,
                Dinheiro: 5000000000,
                Jogadores:[],
            },
            {
                Nome: "Chicken and Ball",
                Poder: 84,
                Dinheiro: 5000000000,
                Jogadores:[],
            },
            {
                Nome: "Lions FC",
                Poder: 80,
                Dinheiro: 10000000000,
                Jogadores:[],
            },
            {
                Nome: "Oldcastle",
                Poder: 79,
                Dinheiro: 10000000000,
                Jogadores:[],
            },
            {
                Nome: "Chanmenster United",
                Poder: 76,
                Dinheiro: 7000000000,
                Jogadores:[],
            },
            {
                Nome: "East Pork",
                Poder: 65,
                Dinheiro: 50000000,
                Jogadores:[],
            },
            {
                Nome: "Diamond Kingdom",
                Poder: 64,
                Dinheiro: 25000000,
                Jogadores:[],
            },
            {
                Nome: "Seagullers",
                Poder: 64,
                Dinheiro: 50000000,
                Jogadores:[],
            },
            {
                Nome: "Deadinhand",
                Poder: 62,
                Dinheiro: 30000000,
                Jogadores:[],
            },
            {
                Nome: "Empty-Salami",
                Poder: 66,
                Dinheiro: 70000000,
                Jogadores:[],
            },
            {
                Nome: "Dogs",
                Poder: 61,
                Dinheiro: 50000000,
                Jogadores:[],
            },
            {
                Nome: "Little-Onion",
                Poder: 59,
                Dinheiro: 10000000,
                Jogadores:[],
            },
            {
                Nome: "Bee Shield",
                Poder: 58,
                Dinheiro: 10000000,
                Jogadores:[],
            },
            {
                Nome: "Never & Nothing Wood",
                Poder: 56,
                Dinheiro: 10000000,
                Jogadores:[],
            },
            {
                Nome: "Fighting City",
                Poder: 50,
                Dinheiro: 10000000,
                Jogadores:[],
            },
            {
                Nome: "Schorcherley",
                Poder: 46,
                Dinheiro: 8500000,
                Jogadores:[],
            },
            {
                Nome: "Pirates",
                Poder: 42,
                Dinheiro: 5500000,
                Jogadores:[],
            },
        ],
    ],
    [
        "Espanha",
        [
            "El Liga (ESP 1)",
            850000000,
            {
                Nome: "Falsete Madrid",
                Poder: 95,
                Dinheiro: 30000000000,
                Jogadores:[],
            },
            {
                Nome: "Barsienlona",
                Poder: 84,
                Dinheiro: 450000000,
                Jogadores:[],
            },
            {
                Nome: "Atréutic-Madrinense",
                Poder: 76,
                Dinheiro: 300000000,
                Jogadores:[],
            },
            {
                Nome: "Rigona",
                Poder: 80,
                Dinheiro: 250000000,
                Jogadores:[],
            },
            {
                Nome: "Atréutic Bill's Ball",
                Poder: 75,
                Dinheiro: 50000000,
                Jogadores:[],
            },
            {
                Nome: "Falsa Sociedad",
                Poder: 80,
                Dinheiro: 75000000,
                Jogadores:[],
            },
            {
                Nome: "I-Bet's",
                Poder: 74,
                Dinheiro: 75000000,
                Jogadores:[],
            },
            {
                Nome: "Falsa Village",
                Poder: 73,
                Dinheiro: 50000000,
                Jogadores:[],
            },
            {
                Nome: "Falenzia",
                Poder: 70,
                Dinheiro: 45000000,
                Jogadores:[],
            },
            {
                Nome: "Velaféz",
                Poder: 67,
                Dinheiro: 35000000,
                Jogadores:[],
            },
            {
                Nome: "Osazuno",
                Poder: 64,
                Dinheiro: 27500000,
                Jogadores:[],
            },
            {
                Nome: "Guetafi",
                Poder: 62,
                Dinheiro: 12500000,
                Jogadores:[],
            },
            {
                Nome: "Celtics del Vidro",
                Poder: 66,
                Dinheiro: 25000000,
                Jogadores:[],
            },
            {
                Nome: "Sencidad",
                Poder: 61,
                Dinheiro: 10000000,
                Jogadores:[],
            },
            {
                Nome: "Ballena-orca",
                Poder: 59,
                Dinheiro: 7500000,
                Jogadores:[],
            },
            {
                Nome: "Los Pes",
                Poder: 58,
                Dinheiro: 7000000,
                Jogadores:[],
            },
            {
                Nome: "Ray Valenziano",
                Poder: 56,
                Dinheiro: 6125000,
                Jogadores:[],
            },
            {
                Nome: "Cadil",
                Poder: 50,
                Dinheiro: 3500000,
                Jogadores:[],
            },
            {
                Nome: "Almejaria",
                Poder: 46,
                Dinheiro: 3500000,
                Jogadores:[],
            },
            {
                Nome: "San-Armado",
                Poder: 42,
                Dinheiro: 3500000,
                Jogadores:[],
            },
        ],
    ],
    [
        "Brasil", //Nome do país
        [ //Série A
            "Brasileirão Série A", //Nome da Liga
            150000000, //Valor da Liga (Receita para distribuir entre os clubes)
            //Clubes
            {
                Nome: "Flaminco",
                Poder: 65,
                Dinheiro: 50000000,
                Jogadores:[],
            },
            {
                Nome: "Guaranau",
                Poder: 30,
                Dinheiro: 1000000,
                Jogadores:[],
            },
            {
                Nome: "Crubeiro",
                Poder: 45,
                Dinheiro: 10000000,
                Jogadores:[],
            },
            {
                Nome: "Frunimense",
                Poder: 57,
                Dinheiro: 17500000,
                Jogadores:[],
            },
            {
                Nome: "Casvo",
                Poder: 43,
                Dinheiro: 10000000,
                Jogadores:[],
            },
            {
                Nome: "Atlético-Minarense",
                Poder: 60,
                Dinheiro: 40000000,
                Jogadores:[],
            },
            {
                Nome: "Pranalmeiras",
                Poder: 62,
                Dinheiro: 45000000,
                Jogadores:[],
            },
            {
                Nome: "Proribiba",
                Poder: 35,
                Dinheiro: 5000000,
                Jogadores:[],
            },
            {
                Nome: "Buiacá",
                Poder: 50,
                Dinheiro: 7500000,
                Jogadores:[],
            },
            {
                Nome: "América-Migreigo",
                Poder: 30,
                Dinheiro: 1000000,
                Jogadores:[],
            },
            {
                Nome: "Varrintians",
                Poder: 46,
                Dinheiro: 30000000,
                Jogadores:[],
            },
            {
                Nome: "Rinvernational",
                Poder: 58,
                Dinheiro: 37500000,
                Jogadores:[],
            },
            {
                Nome: "Saint-Pauli",
                Poder: 52,
                Dinheiro: 20000000,
                Jogadores:[],
            },
            {
                Nome: "Habia",
                Poder: 40,
                Dinheiro: 50000000,
                Jogadores:[],
            },
            {
                Nome: "Rémiô",
                Poder: 61,
                Dinheiro: 40000000,
                Jogadores:[],
            },
            {
                Nome: "Ford Leza",
                Poder: 55,
                Dinheiro: 20000000,
                Jogadores:[],
            },
            {
                Nome: "Derrota FC",
                Poder: 35,
                Dinheiro: 9000000,
                Jogadores:[],
            },
            {
                Nome: "Velhice",
                Poder: 32,
                Dinheiro: 7500000,
                Jogadores:[],
            },
            {
                Nome: "Atréuitic-Goiano",
                Poder: 31,
                Dinheiro: 5000000,
                Jogadores:[],
            },
            {
                Nome: "Crucrumá",
                Poder: 27,
                Dinheiro: 2500000,
                Jogadores:[],
            },
        ], 
        [ //Série B
            "Brasileirão Série B", //Nome da Liga
            25000000, //Valor da Liga (Receita para distribuir entre os clubes)
            {
                Nome: "New-Horizonte",
                Poder: 27,
                Dinheiro: 500000,
                Jogadores:[],
            },
            {
                Nome: "Mira-Lua",
                Poder: 25,
                Dinheiro: 450000,
                Jogadores:[],
            },
            {
                Nome: "Esportivo Esporte",
                Poder: 22,
                Dinheiro: 350000,
                Jogadores:[],
            },
            {
                Nome: "New Village",
                Poder: 20,
                Dinheiro: 300000,
                Jogadores:[],
            },
            {
                Nome: "Tupinamribi",
                Poder: 16,
                Dinheiro: 250000,
                Jogadores:[],
            },
            {
                Nome: "Falso Botafogo",
                Poder: 14,
                Dinheiro: 200000,
                Jogadores:[],
            },
            {
                Nome: "Lituano",
                Poder: 13,
                Dinheiro: 175000,
                Jogadores:[],
            },
            {
                Nome: "Havaí - New Island",
                Poder: 12,
                Dinheiro: 150000,
                Jogadores:[],
            },
            {
                Nome: "Portão Branco",
                Poder: 11,
                Dinheiro: 125000,
                Jogadores:[],
            },
            {
                Nome: "Chapecó",
                Poder: 10,
                Dinheiro: 100000,
                Jogadores:[],
            },
            {
                Nome: "XYZ Clube",
                Poder: 9,
                Dinheiro: 95000,
                Jogadores:[],
            },
            {
                Nome: "Pai-sanduba",
                Poder: 9,
                Dinheiro: 90000,
                Jogadores:[],
            },
            {
                Nome: "Remada Esporte Clube",
                Poder: 8,
                Dinheiro: 80000,
                Jogadores:[],
            },
            {
                Nome: "Submarino de Regatas",
                Poder: 7,
                Dinheiro: 75000,
                Jogadores:[],
            },
            {
                Nome: "Saints",
                Poder: 28,
                Dinheiro: 550000,
                Jogadores:[],
            },
            {
                Nome: "Brusquetas Clube",
                Poder: 21,
                Dinheiro: 350000,
                Jogadores:[],
            },
            {
                Nome: "São São Bernadeschi",
                Poder: 5,
                Dinheiro: 50000,
                Jogadores:[],
            },
            {
                Nome: "Base Brasileira de Futebol Clube",
                Poder: 4,
                Dinheiro: 25000,
                Jogadores:[],
            },
            {
                Nome: "Gurilandia FC",
                Poder: 2,
                Dinheiro: 10000,
                Jogadores:[],
            },
            {
                Nome: "Friendship Forever Sport Club",
                Poder: 1,
                Dinheiro: 5000,
                Jogadores:[],
            },
        ],
    ],
    [
        "Argentina",
        [
            "Liga Argentina",
            95000000,
            {
                Nome: "Rio Plata",
                Poder: 55,
                Dinheiro: 40000000,
                Jogadores:[],
            },
            {
                Nome: "Corridas",
                Poder: 51,
                Dinheiro: 25000000,
                Jogadores:[],
            },
            {
                Nome: "Confederación Argentina",
                Poder: 30,
                Dinheiro: 75000000,
                Jogadores:[],
            },
            {
                Nome: "Nuevos Ninos",
                Poder: 37,
                Dinheiro: 17500000,
                Jogadores:[],
            },
            {
                Nome: "Maestros",
                Poder: 39,
                Dinheiro: 10000000,
                Jogadores:[],
            },
            {
                Nome: "Narices Juniors",
                Poder: 50,
                Dinheiro: 35000000,
                Jogadores:[],
            },
            {
                Nome: "Ataque y Injusticia",
                Poder: 37,
                Dinheiro: 5000000,
                Jogadores:[],
            },
            {
                Nome: "Orenense",
                Poder: 39,
                Dinheiro: 6000000,
                Jogadores:[],
            },
            {
                Nome: "San Augusto",
                Poder: 30,
                Dinheiro: 3500000,
                Jogadores:[],
            },
            {
                Nome: "Velas de los Barcos",
                Poder: 47,
                Dinheiro: 15000000,
                Jogadores:[],
            },
            {
                Nome: "Depiendente de Ustedes",
                Poder: 45,
                Dinheiro: 9000000,
                Jogadores:[],
            },
            {
                Nome: "Cuchillos y Tenedores",
                Poder: 35,
                Dinheiro: 8000000,
                Jogadores:[],
            },
            {
                Nome: "Democracy",
                Poder: 28,
                Dinheiro: 2000000,
                Jogadores:[],
            },
            {
                Nome: "Joinfield",
                Poder: 32,
                Dinheiro: 2750000,
                Jogadores:[],
            },
            {
                Nome: "No-Esportivo Club",
                Poder: 29,
                Dinheiro: 3000000,
                Jogadores:[],
            },
            {
                Nome: "Leon",
                Poder: 32,
                Dinheiro: 3500000,
                Jogadores:[],
            },
            {
                Nome: "Derecha Córdoba",
                Poder: 25,
                Dinheiro: 500000,
                Jogadores:[],
            },
            {
                Nome: "Nalús",
                Poder: 20,
                Dinheiro: 250000,
                Jogadores:[],
            },
            {
                Nome: "Santiarmiento",
                Poder: 36,
                Dinheiro: 7500000,
                Jogadores:[],
            },
            {
                Nome: "Tornado",
                Poder: 27,
                Dinheiro: 1750000,
                Jogadores:[],
            },
        ],
    ],
];

var PassesLivres = [
]
var NewInPassesLivres = [
]
var Aposentados = [
]
var SubidosDaBase=[
]
var Paises = [
    "Brasil",
    "Argentina"
]

//Variaveis Jogadores
var Nomes = {
    Brasil: [
    "Gabriel",
    "Fernando",
    "Phormosandrinho",
    "Oswaldinato",
    "Preguinho",
    "Bruno",
    "Bruno Henrique",
    "Wesley",
    "Caetano",
    "Samuel",
    "Don",
    "Pedro",
    "Éverton",
    "Luís",
    "José",
    "Endrick",
    "Deyverson",
    "Deiverson",
    "Ribamar",
    "Gustavo",
    "Neymarinho",
    "Tiago",
    "Thiago",
    "Ronaldo",
    "Rivaldo",
    "Ricardo",
    "Neymar",
    "Rogério",
    "João",
    "Vinícius",
    "Rodrigo",
    "Rodrygo",
    "Rafael",
    "Raphael",
    "Fernando",
    "Bernardo",
    "Benjamim",
    "Benjamin",
    "Lucas",
    "Hélio",
    "Aroldo",
    "Haroldo",
    "Arnaldo",
    "Harnaldo",
    "Leonardo",
    "Marcos",
    "Marcos Leonardo",
    "Mario",
    "Willian",
    "Gerson",
    "Yuri",
    "Galvão",
    "Tafarél",
    "Romário",
    "Davi",
    "David",
    "João Pedro",
    "Miguel",
    "Benício",
    "Vitor",
    "Victor",
    "Enzo",
    "Gilberto",
    "Francisco",
    ],
    Argentina: [
        "Hernandez",
        "Hérnandez",
        "Hernandéz",
        "Carlito",
        "Pablo",
        "Pietro",
        "Don",
        "Puma",
        "Lionel",
        "Juan",
        "Miguel",
        "Carlos",
        "José"
    ],
    Espanha: [
        "Hernandez",
        "Hérnandez",
        "Hernandéz",
        "Carlito",
        "Pablo",
        "Pietro",
        "Don",
        "Puma",
        "Lionel",
        "Juan",
        "Miguel",
        "Carlos",
        "José"
    ],
    Inglaterra: [
        "Harrison",
        "George",
        "Peterson",
        "Alexander",
        "Harry",
        "Peter",
        "Phil",
        "Harold",
        "Arold",
        "Arnold",
        "Michael",
        "Noah",
        "Oliver",
        "Oscar",
        "Leo",
        "Muhammad",
        "David",
        "Robert",
        "John",
        "Albert",
        "Dennis",
        "Polter"
    ]
}

var Sobrenomes = [
    "Preguinho",
    "Silva",
    "Scarpa",
    "Marques",
    "Borges",
    "Borge",
    "Barbosa",
    "Barbos",
    "Reis",
    "Freitas",
    "Ribeiro",
    "Pinto",
    "Ribas",
    "Alves",
    "Camara",
    "Rocha",
    "Santos",
    "Medeiros",
    "Meideiros",
    "Mendeiros",
    "Cruz",
    "Crus",
    "Ney",
    "Matogrosso",
    "Jr.",
    "dos Santos",
    "da Silva",
    "Braga",
    "Araújo",
    "Silveira",
    "Tomás",
    "Barbosa",
    "Almeida",
    "Abreu",
    "Moreira",
    "Marinho",
    "Carreira",
    "da Cunha",
    "Alencar",
    "de Almeida",
    "Souza",
    "Arão",
    "França",
    "Lima",
    "Alberto",
    "Bonfim",
    "Bomfim",
    "Buarque",
    "Veloso",
    "Angel",
    "Carlos",
    "Manuel",
]

var Apelidos = [
    "Messinho",
    "Cristianinho",
    "Neymarzinho",
    "Menino",
    "Preguinho",
    "Lil",
    "Tamanduá",
    "Carrapato",
    "Privada",
    "Queixada",
    "Artilheiro",
    "Perebinha",
    "Pereba",
    "Careca",
    "Bello",
    "Bagre",
    "Bagrinho",
    "Bagrino",
    "Fenômeno",
    "Calvinho",
    "Calvino",
    "Mbappé da Shoppe",
    "Gordola",
    "Bruxo",
    "Estrela",
    "Tapetinho",
    "Dory",
    "Grilo",
    "Nemo",
    "Biscoito",
    "Demônio",
    "Endiabrado",
    "Cafuné",
    "Marmelada",
    "Wolwerine",
    "Homem-Aranha",
    "Hollywood",
    "Malagueta",
    "Daddy",
    "Pitbull",
    "Zé",
    "Hipster",
    "Rei",
    "Pernambucano",
    "Carioca",
    "Paulista",
    "Paraíbano",
    "Alagoense",
    "Sergipano",
    "Capixaba",
    "Mineiro",
    "Triturador",
    "Escapamento",
    "Gil",
    "Gol",
    "Precioso",
    "Jóia",
]

var Posicoes = [
    "Goleiro",
    "Lateral Esquerdo",
    "Zagueiro",
    "Lateral Direito",
    "Volante",
    "Meio-Campo",
    "Meio-Campo Ofensivo",
    "Ponta Esquerda",
    "Segundo Atacante",
    "Ponta Direita",
    "Atacante"
]

var PosicoesDeDefesa = [
    "Goleiro",
    "Lateral Esquerdo",
    "Zagueiro",
    "Lateral Direito",
    "Volante",
    "Meio-Campo",
]

var PosicoesDeAtaque = [
    "Meio-Campo Ofensivo",
    "Ponta Esquerda",
    "Segundo Atacante",
    "Ponta Direita",
    "Atacante",
]

//Variaveis Times

////Código

//Funcoes Sistematizadas
function RandomNumberBetween(min, max){
    return Math.round((Math.random() * (max - min)) + min)
}

function MelhorJogadorDaPosicao(time, posicao, heuristica){

    let Jogadores = time.Jogadores

    let MaiorOvr = 0
    let MelhorJogador

    if(posicao != "random"){
        for(i = 0; i < Jogadores.length; i++){

            let Jogador = Jogadores[i]
    
            if(Jogador){
                if(Jogador.Posicao == posicao){
                    
                    if(heuristica == "melhor"){
                        let OvrDoJogador = (Jogador.Nivel + Jogador.Potencial) / 2
        
                        if(OvrDoJogador > MaiorOvr){
                            MaiorOvr = OvrDoJogador
                            MelhorJogador = Jogador
                        }
                    }
                    else if(heuristica == "random"){

                        if(RandomNumberBetween(1,2)){
                            MelhorJogador = Jogador
                        }

                    }

                }
            }
    
        }
    }
    else{
        if(heuristica == "melhor"){
            for(i = 0; i < Jogadores.length; i++){

                let Jogador = Jogadores[i]
        
                if(Jogador){
                    let OvrDoJogador = (Jogador.Nivel + Jogador.Potencial) / 2
        
                    if(OvrDoJogador > MaiorOvr){
                        MaiorOvr = OvrDoJogador
                        MelhorJogador = Jogador
                    }
                }
        
            }
        }
        else{
            MelhorJogador = Jogadores[RandomNumberBetween(0, Jogadores.length - 1)]
        }
    }

    if(MelhorJogador){
        return MelhorJogador
    }
    else{
        return "NaN"
    }

}

//Simulacao
function CriarJogadores(){
    for(let i = 0; i < Ligas.length; i++){
        
        let NowLiga = Ligas[i]

        for(let j = 1; j < NowLiga.length; j++){

            let NowDivisao = NowLiga[j]

            for(let k = 2; k < NowDivisao.length; k++){

                let NowClube = NowDivisao[k]
                let Jogadores = NowClube.Jogadores
                
                let NumeroDeJogadoresMin = 24
                let NumeroDeJogadoresMax = 45
                let NumeroDeJogadores = RandomNumberBetween(NumeroDeJogadoresMin, NumeroDeJogadoresMax)

                for(let l = 0; l < NumeroDeJogadores; l++){
                    let Jogador = {}

                    if(RandomNumberBetween(1,14) != 14){
                        Jogador.Nacionalidade = NowLiga[0]
                    }
                    else{
                        Jogador.Nacionalidade = Paises[RandomNumberBetween(0,Paises.length - 1)]
                    }

                    Jogador.Nome = Nomes[Jogador.Nacionalidade][RandomNumberBetween(0, Nomes[Jogador.Nacionalidade].length - 1)]
                    Jogador.Sobrenome1 = Sobrenomes[RandomNumberBetween(0, Sobrenomes.length - 1)]
                    Jogador.Sobrenome2 = Sobrenomes[RandomNumberBetween(0, Sobrenomes.length - 1)]

                    Jogador.Posicao = Posicoes[RandomNumberBetween(0, Posicoes.length - 1)]

                    Jogador.Idade = RandomNumberBetween(15, 35)
                    Jogador.Nivel = NowClube.Poder + RandomNumberBetween(-5,5)
                    
                    Jogador.Gols = 0
                    Jogador.Assistencias = 0
                    Jogador.Salvadas = 0
                    
                    Jogador.Moral = 1

                    Jogador.Time = NowClube.Nome

                    if(Jogador.Nivel < 1){
                        Jogador.Nivel = 1
                    }

                    if(Jogador.Idade <= 22){
                        Jogador.Potencial = Jogador.Nivel + RandomNumberBetween(5,20)
                        if(Jogador.Potencial > 99){
                            Jogador.Potencial = 99
                        }
                    }
                    else{
                        Jogador.Potencial = Jogador.Nivel
                    }

                    if(Jogador.Nivel > NowClube.Poder || Jogador.Potencial > 80){
                        if(RandomNumberBetween(1,4) == 2){
                            Jogador.Apelido = Apelidos[RandomNumberBetween(0, Apelidos.length - 1)]
                        }
                    }

                    Jogador.Valor = Math.floor((((Jogador.Nivel + (Jogador.Potencial * 2)) / 3) / (Jogador.Idade * 3.41)) * (NowClube.Poder / 70) * 100000000 * Jogador.Moral)
                    Jogador.PodeSerContratado = true

                    Jogador.Contrato = RandomNumberBetween(1,8)

                    Jogadores.push(Jogador)

                }

            }

        }

    }

    console.log(Ligas)
}

function Transferencias(){
    SimulationDiv.innerHTML = SimulationDiv.innerHTML + "<div id='transferencias"+ Year.toString() +"' class='transferencias'><h1>" + Year + "</h1> <br> <h1>Transferências da janela</h1></div><br>"
    let TransferDiv = document.getElementById("transferencias" + Year.toString())

    //Definir número de times existentes 

    let ApenasOsTimes = []

    for(i = Aposentados.length - 1; i > -1; i--){

        let Jogador = Aposentados[i]

        if(Jogador.Apelido){
            TransferDiv.innerHTML = TransferDiv.innerHTML + ' <h2>' + Jogador.Nome + ' "' + Jogador.Apelido + '" ' + Jogador.Sobrenome1 + ' (' + Jogador.Posicao + ', ' + Jogador.Idade + ' anos, '+ Jogador.Nivel +' de nível)</h2> <h3>' + Jogador.Time + ' ---> Aposentado </h3>'
        }
        else{
            TransferDiv.innerHTML = TransferDiv.innerHTML + ' <h2>' + Jogador.Nome + ' ' + Jogador.Sobrenome1 + ' (' + Jogador.Posicao + ', ' + Jogador.Idade + ' anos, '+ Jogador.Nivel +' de nível)</h2> <h3>' + Jogador.Time + ' ---> Aposentado </h3>'
        }

        Aposentados.splice(i, 1)

    }

    for(i = SubidosDaBase.length - 1; i > -1; i--){

        let Jogador = SubidosDaBase[i]

        if(Jogador.Apelido){
            TransferDiv.innerHTML = TransferDiv.innerHTML + ' <h2>' + Jogador.Nome + ' "' + Jogador.Apelido + '" ' + Jogador.Sobrenome1 + ' (' + Jogador.Posicao + ', ' + Jogador.Idade + ' anos, '+ Jogador.Nivel +' de nível)</h2> <h3> Base do ' + Jogador.Time + ' --->' + Jogador.Time + ' </h3>'
        }
        else{
            TransferDiv.innerHTML = TransferDiv.innerHTML + ' <h2>' + Jogador.Nome + ' ' + Jogador.Sobrenome1 + ' (' + Jogador.Posicao + ', ' + Jogador.Idade + ' anos, '+ Jogador.Nivel +' de nível)</h2> <h3> Base do ' + Jogador.Time + ' ---> ' + Jogador.Time + '</h3>'
        }

        SubidosDaBase.splice(i, 1)
    }

    for(i = NewInPassesLivres.length - 1; i > -1; i--){

        let Jogador = NewInPassesLivres[i]

        if(Jogador.Apelido){
            TransferDiv.innerHTML = TransferDiv.innerHTML + ' <h2>' + Jogador.Nome + ' "' + Jogador.Apelido + '" ' + Jogador.Sobrenome1 + ' (' + Jogador.Posicao + ', ' + Jogador.Idade + ' anos, '+ Jogador.Nivel +' de nível)</h2> <h3>' + Jogador.Time + ' ---> Passes Livres (R$ ' + Jogador.Valor.toLocaleString("pt-BR") + ') </h3>'
        }
        else{
            TransferDiv.innerHTML = TransferDiv.innerHTML + ' <h2>' + Jogador.Nome + ' ' + Jogador.Sobrenome1 + ' (' + Jogador.Posicao + ', ' + Jogador.Idade + ' anos, '+ Jogador.Nivel +' de nível)</h2> <h3>' + Jogador.Time + ' ---> Passes Livres (R$ ' + Jogador.Valor.toLocaleString("pt-BR") + ') </h3>'
        }

        NewInPassesLivres.splice(i, 1)

    }

    for(let i = 0; i < Ligas.length; i++){
        
        let NowLiga = Ligas[i]

        for(let j = 1; j < NowLiga.length; j++){

            let NowDivisao = NowLiga[j]

            for(let k = 2; k < NowDivisao.length; k++){

                ApenasOsTimes.push(NowDivisao[k])

            }

        }

    }

    ApenasOsTimes.sort(function(a, b){return b.Poder - a.Poder})

    for(let i = 0; i < ApenasOsTimes.length; i++){

        let DinheiroDoClube = ApenasOsTimes[i].Dinheiro
        let QuerContratar = RandomNumberBetween(1,10)
        let DinheiroParaCadaContratacao = 0
        
        if(ApenasOsTimes[i].Jogadores.length < 16){
            QuerContratar = 1
        }

        if(QuerContratar <= 7){
            
            let NumeroDeContratacoes = RandomNumberBetween(1,6)
            DinheiroParaCadaContratacao = Math.floor((DinheiroDoClube / 2) / NumeroDeContratacoes)

            if(ApenasOsTimes[i].Jogadores.length < 16){
                NumeroDeContratacoes = (16 - ApenasOsTimes[i].Jogadores.length)
                DinheiroParaCadaContratacao = Math.floor((DinheiroDoClube * 0.95) / NumeroDeContratacoes)
            }

            console.log(NumeroDeContratacoes)

            for(x = 0; x < NumeroDeContratacoes; x++){

                let PosicaoDesejada = Posicoes[RandomNumberBetween(0, Posicoes.length - 1)]
                let MaiorOvr = 0
                let JogadorEscolhido
                let ClubeDoJogadorEscolhido

                for(let j = 0; j < PassesLivres.length; j++){

                    let NowJogador = PassesLivres[j]

                    if(NowJogador){
                        if(NowJogador.Posicao == PosicaoDesejada && NowJogador.PodeSerContratado == true){

                            let NowJogadorOvr = (NowJogador.Nivel + NowJogador.Potencial) / 2

                            if(NowJogadorOvr > MaiorOvr && NowJogador.Valor <= DinheiroParaCadaContratacao){

                                MaiorOvr = NowJogadorOvr
                                JogadorEscolhido = NowJogador
                                ClubeDoJogadorEscolhido = "Passes Livres"

                            }

                        }
                    }

                }

                for(let j = 0; j < ApenasOsTimes.length; j++){
    
                    if(ApenasOsTimes[i] != ApenasOsTimes[j]){
                        
                        for(k = 0; k < ApenasOsTimes[j].Jogadores.length; k++){
    
                            let NowJogador = ApenasOsTimes[j].Jogadores[k]

                            if(NowJogador){
                                if(NowJogador.Posicao == PosicaoDesejada && NowJogador.PodeSerContratado == true){
    
                                    let NowJogadorOvr = (NowJogador.Nivel + NowJogador.Potencial) / 2
        
                                    if(NowJogadorOvr > MaiorOvr && NowJogador.Valor <= DinheiroParaCadaContratacao){
        
                                        MaiorOvr = NowJogadorOvr
                                        JogadorEscolhido = NowJogador
                                        ClubeDoJogadorEscolhido = ApenasOsTimes[j]
        
                                    }
        
                                }
                            }
    
                        }
    
                    }
                }

                if(JogadorEscolhido){

                    JogadorEscolhido.PodeSerContratado = false
                    JogadorEscolhido.Contrato = JogadorEscolhido.Contrato + RandomNumberBetween(1,5)

                    let NowTimeReal
                    let TransferTimeReal

                    for(let a = 0; a < Ligas.length; a ++){

                        let NowLiga = Ligas[a]

                        for(let b = 1; b < NowLiga.length; b++){

                            let NowDivisao = NowLiga[b]

                            for(let c = 2; c < NowDivisao.length; c++){

                                if(ApenasOsTimes[i].Nome == NowDivisao[c].Nome){
                                    NowTimeReal = NowDivisao[c]
                                }
                                
                                if(ClubeDoJogadorEscolhido != "Passes Livres"){
                                    if(ClubeDoJogadorEscolhido.Nome == NowDivisao[c].Nome){
                                        TransferTimeReal = NowDivisao[c]
                                    }
                                }
                                else{
                                    TransferTimeReal = "Passes Livres"
                                }

                            }

                        }

                    }

                    if(NowTimeReal && TransferTimeReal){

                        if(TransferTimeReal != "Passes Livres"){
                            TransferTimeReal.Jogadores.splice(TransferTimeReal.Jogadores.indexOf(JogadorEscolhido), 1)
                            NowTimeReal.Jogadores.push(JogadorEscolhido)
                        
                            NowTimeReal.Dinheiro = NowTimeReal.Dinheiro - JogadorEscolhido.Valor
                            TransferTimeReal.Dinheiro = TransferTimeReal.Dinheiro + JogadorEscolhido.Valor

                            JogadorEscolhido.Time = NowTimeReal.Nome
                        }
                        else{
                            PassesLivres.splice(PassesLivres.indexOf(JogadorEscolhido), 1)
                            NowTimeReal.Jogadores.push(JogadorEscolhido)
                            JogadorEscolhido.Time = NowTimeReal.Nome
                        }

                    }

                    if(TransferTimeReal != "Passes Livres"){
                        if(JogadorEscolhido.Apelido){
                            TransferDiv.innerHTML = TransferDiv.innerHTML + ' <h2>' + JogadorEscolhido.Nome + ' "' + JogadorEscolhido.Apelido + '" ' + JogadorEscolhido.Sobrenome1 + ' (' + JogadorEscolhido.Posicao + ', ' + JogadorEscolhido.Idade + ' anos, '+ JogadorEscolhido.Nivel +' de nível)</h2> <h3>' + ClubeDoJogadorEscolhido.Nome + ' ---> ' + ApenasOsTimes[i].Nome + ' (R$ ' + JogadorEscolhido.Valor.toLocaleString("pt-BR") + ') </h3>'
                        }
                        else{
                            TransferDiv.innerHTML = TransferDiv.innerHTML + ' <h2>' + JogadorEscolhido.Nome + ' ' + JogadorEscolhido.Sobrenome1 + ' (' + JogadorEscolhido.Posicao + ', ' + JogadorEscolhido.Idade + ' anos, '+ JogadorEscolhido.Nivel +' de nível)</h2> <h3>' + ClubeDoJogadorEscolhido.Nome + ' ---> ' + ApenasOsTimes[i].Nome + ' (R$ ' + JogadorEscolhido.Valor.toLocaleString("pt-BR") + ') </h3>'
                        }
                    }
                    else{
                        if(JogadorEscolhido.Apelido){
                            TransferDiv.innerHTML = TransferDiv.innerHTML + ' <h2>' + JogadorEscolhido.Nome + ' "' + JogadorEscolhido.Apelido + '" ' + JogadorEscolhido.Sobrenome1 + ' (' + JogadorEscolhido.Posicao + ', ' + JogadorEscolhido.Idade + ' anos, '+ JogadorEscolhido.Nivel +' de nível)</h2> <h3> Passes Livres ---> ' + ApenasOsTimes[i].Nome + ' (R$ ' + JogadorEscolhido.Valor.toLocaleString("pt-BR") + ') </h3>'
                        }
                        else{
                            TransferDiv.innerHTML = TransferDiv.innerHTML + ' <h2>' + JogadorEscolhido.Nome + ' ' + JogadorEscolhido.Sobrenome1 + ' (' + JogadorEscolhido.Posicao + ', ' + JogadorEscolhido.Idade + ' anos, '+ JogadorEscolhido.Nivel +' de nível)</h2> <h3> Passes Livres ---> ' + ApenasOsTimes[i].Nome + ' (R$ ' + JogadorEscolhido.Valor.toLocaleString("pt-BR") + ') </h3>'
                        }
                    }

                }
            }
        }

        
    }
}

function SimularLigas(){
    SimulationDiv.innerHTML = SimulationDiv.innerHTML + "<div id='SuperSimulation" + Year.toString() + "' class='SuperSimulation'><h1>Simulação das Ligas</h1></div>"
    let SuperSimulationDiv = document.getElementById("SuperSimulation" + Year.toString())

    let TodosOsJogadores = []

    for(let i = 0; i < Ligas.length; i++){
        
        let NowLiga = Ligas[i]

        for(let j = 1; j < NowLiga.length; j++){

            let NowDivisao = NowLiga[j]
            
            for(let k = 2; k < NowDivisao.length; k++){

                let NowClube = NowDivisao[k]
                
                if (RandomNumberBetween(0,5) != 0){
                    NowDivisao.splice(NowDivisao.indexOf(NowClube), 1)
                    NowDivisao.push(NowClube)
                }


            }

        }

    }

    for(let i = 0; i < Ligas.length; i++){
        
        let NowLiga = Ligas[i]

        for(let j = 1; j < NowLiga.length; j++){

            let NowDivisao = NowLiga[j]
            let Confrontos = []
            let TimesOrganizados = []

            let ForcaDaLiga = 0

            for(let k = 2; k < NowDivisao.length; k++){

                let NowClube = NowDivisao[k]
                NowClube.Jogos = 0
                NowClube.Vitorias = 0
                NowClube.Empates = 0
                NowClube.Derrotas = 0

                for(g = k + 1; g < NowDivisao.length; g++){
                    
                    Confrontos.push({
                        Casa: NowClube,
                        Fora: NowDivisao[g],
                    })
                    Confrontos.push({
                        Casa: NowDivisao[g],
                        Fora: NowClube,
                    })

                }

                NowClube.GolsFeitos = 0
                NowClube.GolsSofridos = 0

                ForcaDaLiga += NowClube.Poder
            }

            ForcaDaLiga = ForcaDaLiga / (NowDivisao.length - 2)

            for(o = 0; o < Confrontos.length; o++){
                
                let TimeCasa = Confrontos[o].Casa
                let TimeFora = Confrontos[o].Fora
                let BoostDeTorcida = (TimeCasa.Poder / 100) + 1
                let Diferenca = Math.floor(Math.abs((TimeCasa.Poder - TimeFora.Poder)) * (BoostDeTorcida))

                let PlacarTimeCasa = 0
                let PlacarTimeFora = 0

                let LancesPromissores = RandomNumberBetween(Math.floor(Diferenca * 0.5), Math.floor(Diferenca * 1.5))

                for(h = 0; h < LancesPromissores; h++){

                    let TimeCasaChance = RandomNumberBetween(1, TimeCasa.Poder) * BoostDeTorcida
                    let TimeForaChance = RandomNumberBetween(1, TimeFora.Poder) / BoostDeTorcida
                    let ChanceComPotencial = RandomNumberBetween(1,5)

                    if(ChanceComPotencial >= 5){
                        if(TimeCasaChance >= TimeForaChance){ //Chance do Time da Casa

                            let Assistencia = RandomNumberBetween(1,10)
                            let PosicaoQueMarca = PosicoesDeAtaque[RandomNumberBetween(0, PosicoesDeAtaque.length - 1)]
                            let PosicaoQueDefende = PosicoesDeDefesa[RandomNumberBetween(0, PosicoesDeDefesa.length - 1)]
    
                            if(Assistencia <= 8){
    
                                let PosicaoDaAssistencia = PosicoesDeAtaque[RandomNumberBetween(0, PosicoesDeAtaque.length - 1)]
                                let QuemDaAssistencia = MelhorJogadorDaPosicao(TimeCasa, PosicaoDaAssistencia, "melhor")
    
                                let ReservaOuTitular = RandomNumberBetween(1,10)
    
                               if(QuemDaAssistencia != "NaN"){
                                if(ReservaOuTitular <= 9){ //Titular marca o gol
    
                                    let QuemAtaca = MelhorJogadorDaPosicao(TimeCasa, PosicaoQueMarca, "melhor")
                                    let QuemDefende = MelhorJogadorDaPosicao(TimeFora, PosicaoQueDefende, "melhor")
    
                                    if(QuemAtaca != "NaN"){
    
                                        if(QuemDefende != "NaN"){
    
                                            let AtaqueForca = QuemAtaca.Nivel * (RandomNumberBetween(-50,50) / 10) * BoostDeTorcida
                                            let DefesaForca = QuemDefende.Nivel * (RandomNumberBetween(-50,50) / 10) / BoostDeTorcida 
    
                                            if(AtaqueForca > DefesaForca){
                                                PlacarTimeCasa++
                                                QuemAtaca.Gols = QuemAtaca.Gols + 1
                                                
                                                if(QuemAtaca != QuemDaAssistencia){
                                                    QuemDaAssistencia.Assistencias = QuemDaAssistencia.Assistencias + 1
                                                }
    
                                                TimeCasa.GolsFeitos += 1
                                                TimeFora.GolsSofridos += 1
                                            }
                                            else{
    
                                                if(PosicaoQueDefende == "Goleiro"){
    
                                                    QuemDefende.Salvadas = QuemDefende.Salvadas + 1
                                                    
                                                }
                                                else{
                                                }
    
                                            }
    
                                        }
                                        else{
                                            PlacarTimeCasa++
                                            QuemAtaca.Gols = QuemAtaca.Gols + 1
                                           
                                            if(QuemAtaca != QuemDaAssistencia){
                                                QuemDaAssistencia.Assistencias = QuemDaAssistencia.Assistencias + 1
                                            }
    
                                            TimeCasa.GolsFeitos += 1
                                            TimeFora.GolsSofridos += 1
                                        }
    
                                    }
                                    else{
                                        
                                    }
    
                                }
                                else{ //Reserva marca o gol
    
                                    let QuemAtaca = MelhorJogadorDaPosicao(TimeCasa, PosicaoQueMarca, "random")
                                    let QuemDefende = MelhorJogadorDaPosicao(TimeFora, PosicaoQueDefende, "melhor")
    
                                    if(QuemAtaca != "NaN"){
    
                                        if(QuemDefende != "NaN"){
    
                                            let AtaqueForca = QuemAtaca.Nivel * (RandomNumberBetween(-50,50) / 10) * BoostDeTorcida
                                            let DefesaForca = QuemDefende.Nivel * (RandomNumberBetween(-50,50) / 10) / BoostDeTorcida 
    
                                            if(AtaqueForca > DefesaForca){
                                                PlacarTimeCasa++
                                                
                                                if(QuemAtaca != QuemDaAssistencia){
                                                    QuemDaAssistencia.Assistencias = QuemDaAssistencia.Assistencias + 1
                                                }
    
                                                TimeCasa.GolsFeitos += 1
                                                TimeFora.GolsSofridos += 1
                                            }
                                            else{
    
                                                if(PosicaoQueDefende == "Goleiro"){
    
                                                    QuemDefende.Salvadas = QuemDefende.Salvadas + 1
                                                    
                                                }
                                                else{
                                                }
    
                                            }
    
                                        }
                                        else{
                                            PlacarTimeCasa++
                                            QuemAtaca.Gols = QuemAtaca.Gols + 1

                                            if(QuemAtaca != QuemDaAssistencia){
                                                QuemDaAssistencia.Assistencias = QuemDaAssistencia.Assistencias + 1
                                            }
    
                                            TimeCasa.GolsFeitos += 1
                                            TimeFora.GolsSofridos += 1
                                        }
    
                                    }
    
                                }
                               }
    
                            }
                            else{
    
                                let ReservaOuTitular = RandomNumberBetween(1,10)
    
                                if(ReservaOuTitular <= 9){ //Titular marca o gol
    
                                    let QuemAtaca = MelhorJogadorDaPosicao(TimeCasa, PosicaoQueMarca, "melhor")
                                    let QuemDefende = MelhorJogadorDaPosicao(TimeFora, PosicaoQueDefende, "melhor")
    
                                    if(QuemAtaca != "NaN"){
    
                                        if(QuemDefende != "NaN"){
    
                                            let AtaqueForca = QuemAtaca.Nivel * (RandomNumberBetween(-50,50) / 10) * BoostDeTorcida
                                            let DefesaForca = QuemDefende.Nivel * (RandomNumberBetween(-50,50) / 10) / BoostDeTorcida 
    
                                            if(AtaqueForca > DefesaForca){
                                                PlacarTimeCasa++
                                                QuemAtaca.Gols = QuemAtaca.Gols + 1
                                                
                                                TimeCasa.GolsFeitos += 1
                                                TimeFora.GolsSofridos += 1
                                            }
                                            else{
    
                                                if(PosicaoQueDefende == "Goleiro"){
    
                                                    QuemDefende.Salvadas = QuemDefende.Salvadas + 1
                                                    
                                                }
                                                else{
                                                }
    
                                            }
    
                                        }
                                        else{
                                            PlacarTimeCasa++
                                            QuemAtaca.Gols = QuemAtaca.Gols + 1
    
                                            TimeCasa.GolsFeitos += 1
                                            TimeFora.GolsSofridos += 1
                                        }
    
                                    }
    
                                }
                                else{ //Reserva marca o gol
    
                                    let QuemAtaca = MelhorJogadorDaPosicao(TimeCasa, PosicaoQueMarca, "random")
                                    let QuemDefende = MelhorJogadorDaPosicao(TimeFora, PosicaoQueDefende, "melhor")
    
                                    if(QuemAtaca != "NaN"){
    
                                        if(QuemDefende != "NaN"){
    
                                            let AtaqueForca = QuemAtaca.Nivel * (RandomNumberBetween(-50,50) / 10) * BoostDeTorcida
                                            let DefesaForca = QuemDefende.Nivel * (RandomNumberBetween(-50,50) / 10) / BoostDeTorcida 
    
                                            if(AtaqueForca > DefesaForca){
                                                PlacarTimeCasa++
                                                QuemAtaca.Gols = QuemAtaca.Gols + 1
                                                
                                                TimeCasa.GolsFeitos += 1
                                                TimeFora.GolsSofridos += 1
                                            }
                                            else{
    
                                                if(PosicaoQueDefende == "Goleiro"){
    
                                                    QuemDefende.Salvadas = QuemDefende.Salvadas + 1
                                                    
                                                }
                                                else{
                                                }
    
                                            }
    
                                        }
                                        else{
                                            PlacarTimeCasa++
                                            QuemAtaca.Gols = QuemAtaca.Gols + 1
    
                                            TimeCasa.GolsFeitos += 1
                                            TimeFora.GolsSofridos += 1
                                        }
    
                                    }
    
                                }
    
                            }
    
                        }
                        else{ //Chance do Time de Fora
    
                            let Assistencia = RandomNumberBetween(1,10)
                            let PosicaoQueMarca = PosicoesDeAtaque[RandomNumberBetween(0, PosicoesDeAtaque.length - 1)]
                            let PosicaoQueDefende = PosicoesDeDefesa[RandomNumberBetween(0, PosicoesDeDefesa.length - 1)]
    
                            if(Assistencia <= 8){
    
                                let PosicaoDaAssistencia = PosicoesDeAtaque[RandomNumberBetween(0, PosicoesDeAtaque.length - 1)]
                                let QuemDaAssistencia = MelhorJogadorDaPosicao(TimeFora, PosicaoDaAssistencia, "melhor")
    
                                let ReservaOuTitular = RandomNumberBetween(1,10)
    
                               if(QuemDaAssistencia != "NaN"){
                                if(ReservaOuTitular <= 9){ //Titular marca o gol
    
                                    let QuemAtaca = MelhorJogadorDaPosicao(TimeFora, PosicaoQueMarca, "melhor")
                                    let QuemDefende = MelhorJogadorDaPosicao(TimeCasa, PosicaoQueDefende, "melhor")
    
                                    if(QuemAtaca != "NaN"){
    
                                        if(QuemDefende != "NaN"){
    
                                            let AtaqueForca = QuemAtaca.Nivel * (RandomNumberBetween(-50,50) / 10) / BoostDeTorcida
                                            let DefesaForca = QuemDefende.Nivel * (RandomNumberBetween(-50,50) / 10) * BoostDeTorcida 
    
                                            if(AtaqueForca > DefesaForca){
                                                PlacarTimeFora++
                                                QuemAtaca.Gols = QuemAtaca.Gols + 1
                                                
                                                if(QuemAtaca != QuemDaAssistencia){
                                                    QuemDaAssistencia.Assistencias = QuemDaAssistencia.Assistencias + 1
                                                }
    
                                                TimeFora.GolsFeitos += 1
                                                TimeCasa.GolsSofridos += 1
                                            }
                                            else{
    
                                                if(PosicaoQueDefende == "Goleiro"){
    
                                                    QuemDefende.Salvadas = QuemDefende.Salvadas + 1
                                                    
                                                }
                                                else{
                                                }
    
                                            }
    
                                        }
                                        else{
                                            PlacarTimeFora++
                                            QuemAtaca.Gols = QuemAtaca.Gols + 1
                                            
                                            if(QuemAtaca != QuemDaAssistencia){
                                                QuemDaAssistencia.Assistencias = QuemDaAssistencia.Assistencias + 1
                                            }
    
                                            TimeFora.GolsFeitos += 1
                                            TimeCasa.GolsSofridos += 1
                                        }
    
                                    }
                                    else{
                                    }
    
                                }
                                else{ //Reserva marca o gol
    
                                    let QuemAtaca = MelhorJogadorDaPosicao(TimeFora, PosicaoQueMarca, "random")
                                    let QuemDefende = MelhorJogadorDaPosicao(TimeCasa, PosicaoQueDefende, "melhor")
    
                                    if(QuemAtaca != "NaN"){
    
                                        if(QuemDefende != "NaN"){
    
                                            let AtaqueForca = QuemAtaca.Nivel * (RandomNumberBetween(-50,50) / 10) / BoostDeTorcida
                                            let DefesaForca = QuemDefende.Nivel * (RandomNumberBetween(-50,50) / 10) * BoostDeTorcida 
    
                                            if(AtaqueForca > DefesaForca){
                                                PlacarTimeFora++

                                                QuemAtaca.Gols = QuemAtaca.Gols + 1
                                                
                                                if(QuemAtaca != QuemDaAssistencia){
                                                    QuemDaAssistencia.Assistencias = QuemDaAssistencia.Assistencias + 1
                                                }
    
                                                TimeFora.GolsFeitos += 1
                                                TimeCasa.GolsSofridos += 1
                                            }
                                            else{
    
                                                if(PosicaoQueDefende == "Goleiro"){
    
                                                    QuemDefende.Salvadas = QuemDefende.Salvadas + 1
                                                    

                                                }
                                                else{
                                                }
    
                                            }
    
                                        }
                                        else{
                                            PlacarTimeFora++
                                            QuemAtaca.Gols = QuemAtaca.Gols + 1
                                            
                                            if(QuemAtaca != QuemDaAssistencia){
                                                QuemDaAssistencia.Assistencias = QuemDaAssistencia.Assistencias + 1
                                            }
    
                                            TimeFora.GolsFeitos += 1
                                            TimeCasa.GolsSofridos += 1
                                        }
    
                                    }
    
                                }
                               }
    
                            }
                            else{
    
                                let ReservaOuTitular = RandomNumberBetween(1,10)
    
                                if(ReservaOuTitular <= 9){ //Titular marca o gol
    
                                    let QuemAtaca = MelhorJogadorDaPosicao(TimeFora, PosicaoQueMarca, "melhor")
                                    let QuemDefende = MelhorJogadorDaPosicao(TimeCasa, PosicaoQueDefende, "melhor")
    
                                    if(QuemAtaca != "NaN"){
    
                                        if(QuemDefende != "NaN"){
    
                                            let AtaqueForca = QuemAtaca.Nivel * (RandomNumberBetween(-50,50) / 10) / BoostDeTorcida
                                            let DefesaForca = QuemDefende.Nivel * (RandomNumberBetween(-50,50) / 10) * BoostDeTorcida 
    
                                            if(AtaqueForca > DefesaForca){
                                                PlacarTimeFora++
                                                QuemAtaca.Gols = QuemAtaca.Gols + 1
                                                
                                                TimeFora.GolsFeitos += 1
                                                TimeCasa.GolsSofridos += 1
                                            }
                                            else{
    
                                                if(PosicaoQueDefende == "Goleiro"){
    
                                                    QuemDefende.Salvadas = QuemDefende.Salvadas + 1
                                                    
                                                }
                                                else{
                                                }
    
                                            }
    
                                        }
                                        else{
                                            PlacarTimeFora++
                                            QuemAtaca.Gols = QuemAtaca.Gols + 1
    
                                            TimeFora.GolsFeitos += 1
                                            TimeCasa.GolsSofridos += 1
                                        }
    
                                    }
    
                                }
                                else{ //Reserva marca o gol
    
                                    let QuemAtaca = MelhorJogadorDaPosicao(TimeFora, PosicaoQueMarca, "random")
                                    let QuemDefende = MelhorJogadorDaPosicao(TimeCasa, PosicaoQueDefende, "melhor")
    
                                    if(QuemAtaca != "NaN"){
    
                                        if(QuemDefende != "NaN"){
    
                                            let AtaqueForca = QuemAtaca.Nivel * (RandomNumberBetween(-50,50) / 10) / BoostDeTorcida
                                            let DefesaForca = QuemDefende.Nivel * (RandomNumberBetween(-50,50) / 10) * BoostDeTorcida 
    
                                            if(AtaqueForca > DefesaForca){
                                                PlacarTimeFora++
                                                QuemAtaca.Gols = QuemAtaca.Gols + 1
                                                
                                                TimeFora.GolsFeitos += 1
                                                TimeCasa.GolsSofridos += 1
                                            }
                                            else{
    
                                                if(PosicaoQueDefende == "Goleiro"){
    
                                                    QuemDefende.Salvadas = QuemDefende.Salvadas + 1
                                                    
                                                }
                                                else{
                                                }
    
                                            }
    
                                        }
                                        else{
                                            PlacarTimeFora++
                                            QuemAtaca.Gols = QuemAtaca.Gols + 1
    
                                            TimeFora.GolsFeitos += 1
                                            TimeCasa.GolsSofridos += 1
                                        }
    
                                    }
    
                                }
    
                            }
    
                        }
                    }

                }

                TimeCasa.Jogos += 1
                TimeFora.Jogos += 1

                if(PlacarTimeCasa > PlacarTimeFora){
                    TimeCasa.Vitorias += 1
                    TimeFora.Derrotas += 1
                }
                else if(PlacarTimeCasa == PlacarTimeFora){
                    TimeCasa.Empates += 1
                    TimeFora.Empates += 1
                }
                else{
                    TimeFora.Vitorias += 1
                    TimeCasa.Derrotas += 1
                }

            }

            for(m = 2; m < NowDivisao.length; m++){
                TimesOrganizados.push(NowDivisao[m])
            }

            TimesOrganizados.sort(function(a, b){return ((a.Vitorias * 3) + a.Empates) - ((b.Vitorias * 3) + b.Empates)})
            TimesOrganizados.reverse()

            SuperSimulationDiv.innerHTML = SuperSimulationDiv.innerHTML + '<br><br> <h2>' + NowDivisao[0] + '</h2> <table id="table' + Table.toString() + '" border="1"</table> <br>'
            let MyTable = document.getElementById("table" + Table.toString())
            MyTable.innerHTML += '<tr class="explaining"> <td>Pos</td> <td>Times</td> <td>Jogos</td> <td>Vitórias</td> <td>Empates</td> <td>Derrotas</td> <td>GF</td> <td>GS</td> <td>SG</td> <td>Pontos</td> </tr>'

            for(n = 0; n < TimesOrganizados.length; n++){

                let TimeOrganizado = TimesOrganizados[n]
                TimeOrganizado.PosicaoNaTabela = n+1

                if(n < 3){

                    MyTable.innerHTML += "<tr class='first3'> <td>" + (n+1) +"</td> <td> " + TimeOrganizado.Nome + "</td> <td> " + TimeOrganizado.Jogos + "</td> <td>" + TimeOrganizado.Vitorias + "</td> <td>" + TimeOrganizado.Empates +"</td> <td>"+ TimeOrganizado.Derrotas +"</td> <td> "+ TimeOrganizado.GolsFeitos+"</td> <td> "+ TimeOrganizado.GolsSofridos +"</td> <td> " + (TimeOrganizado.GolsFeitos - TimeOrganizado.GolsSofridos) +" </td> <td>"+ ((TimeOrganizado.Vitorias * 3) + TimeOrganizado.Empates) +"</tr>" 

                }
                else if(TimesOrganizados.length - n < 4 && NowLiga[j+1]){
                    MyTable.innerHTML += "<tr class='last3'> <td>" + (n+1) +"</td> <td> " + TimeOrganizado.Nome + "</td> <td> " + TimeOrganizado.Jogos + "</td> <td>" + TimeOrganizado.Vitorias + "</td> <td>" + TimeOrganizado.Empates +"</td> <td>"+ TimeOrganizado.Derrotas +"</td> <td> "+ TimeOrganizado.GolsFeitos+"</td> <td> "+ TimeOrganizado.GolsSofridos +"</td> <td> " + (TimeOrganizado.GolsFeitos - TimeOrganizado.GolsSofridos) +" </td> <td>"+ ((TimeOrganizado.Vitorias * 3) + TimeOrganizado.Empates) +"</tr>"
                }
                else{
                    MyTable.innerHTML += "<tr> <td>" + (n+1) +"</td> <td> " + TimeOrganizado.Nome + "</td> <td> " + TimeOrganizado.Jogos + "</td> <td>" + TimeOrganizado.Vitorias + "</td> <td>" + TimeOrganizado.Empates +"</td> <td>"+ TimeOrganizado.Derrotas +"</td> <td> "+ TimeOrganizado.GolsFeitos+"</td> <td> "+ TimeOrganizado.GolsSofridos +"</td> <td> " + (TimeOrganizado.GolsFeitos - TimeOrganizado.GolsSofridos) +" </td> <td>"+ ((TimeOrganizado.Vitorias * 3) + TimeOrganizado.Empates) +"</tr>" 
                }

            }
            
            SuperSimulationDiv.innerHTML += "<nav id='container'><div><h2>Artilharia</h2><table id='Artilharia"+ Table.toString() +"'><tr><td>Pos</td><td>Nome</td><td>Time</td><td>Gols</td></tr></table></div><div><h2>Passes pra Gol</h2><table id='Assists" + Table.toString() + "'><tr><td>Pos</td><td>Nome</td><td>Time</td><td>Assistências</td></tr></table></div><div><h2>Salvadas</h2><table id='Salvadas" + Table.toString() + "'><tr><td>Pos</td><td>Nome</td><td>Time</td><td>Salvadas</td></tr></table></div></nav>"

            let GoleirosComSalvadas = []
            let JogadoresComGols = []
            let JogadoresComAssistencias = []

            let TableArtilheiros = document.getElementById("Artilharia" + Table.toString())
            let TableAssists = document.getElementById("Assists" + Table.toString())
            let TableSalvadas = document.getElementById("Salvadas" + Table.toString())

            for(let k = 2; k < NowDivisao.length; k++){
                let NowClube = NowDivisao[k]
                for(let y = 0; y < NowClube.Jogadores.length; y++){
                    let Jogador = NowClube.Jogadores[y]

                    if (Jogador){
                        if(Jogador.Gols > 0){
                            JogadoresComGols.push(Jogador)
                        }
    
                        if(Jogador.Assistencias > 0){
                            JogadoresComAssistencias.push(Jogador)
                        }
    
                        if(Jogador.Salvadas > 0){
                            GoleirosComSalvadas.push(Jogador)
                        }

                        Jogador.PontuacaoTotal = Math.round((((Jogador.Nivel + Jogador.Potencial)) / 2) * (((Jogador.Gols + 1) * 3) * ((Jogador.Assistencias + 1) * 2) * (Jogador.Salvadas + 1) * ForcaDaLiga * 100) / 5)
                        TodosOsJogadores.push(Jogador)
                    }

                }
            }

            TodosOsJogadores.sort(function(a,b) {return b.PontuacaoTotal - a.PontuacaoTotal})
            JogadoresComGols.sort(function(a,b){return b.Gols - a.Gols})
            JogadoresComAssistencias.sort(function(a, b){return b.Assistencias - a.Assistencias})
            GoleirosComSalvadas.sort(function(a,b){return b.Salvadas - a.Salvadas})

            for(b = 0; b < 12; b++){
                
                let Jogador = JogadoresComGols[b]

                if(Jogador){
                    if(Jogador.Apelido){
                        TableArtilheiros.innerHTML += '<tr><td>' + (b+1) + '</td><td>' + Jogador.Nome + ' "' + Jogador.Apelido + '" (' + Jogador.Posicao + ")</td><td>" + Jogador.Time + "</td><td>" + Jogador.Gols + "</td></tr>"
                    }
                    else{
                        TableArtilheiros.innerHTML += '<tr><td>' + (b+1) + '</td><td>' + Jogador.Nome + ' ' + Jogador.Sobrenome1 + " (" + Jogador.Posicao + ")</td><td>" + Jogador.Time + "</td><td>" + Jogador.Gols + "</td></tr>"
                    }
                }

            }

            for(b = 0; b < 10; b++){
                let Jogador = JogadoresComAssistencias[b]

                if(Jogador){
                    if(Jogador.Apelido){
                        TableAssists.innerHTML += '<tr><td>' + (b+1) + '</td><td>' + Jogador.Nome + ' "' + Jogador.Apelido + '" (' + Jogador.Posicao + ")</td><td>" + Jogador.Time + "</td><td>" + Jogador.Assistencias + "</td></tr>"
                    }
                    else{
                        TableAssists.innerHTML += '<tr><td>' + (b+1) + '</td><td>' + Jogador.Nome + ' ' + Jogador.Sobrenome1 + " (" + Jogador.Posicao + ")</td><td>" + Jogador.Time + "</td><td>" + Jogador.Assistencias + "</td></tr>"
                    }
                }
            }

            for(b = 0; b < GoleirosComSalvadas.length; b++){
                let Jogador = GoleirosComSalvadas[b]

                if(Jogador.Apelido){
                    TableSalvadas.innerHTML += '<tr><td>' + (b+1) + '</td><td>' + Jogador.Nome + ' "' + Jogador.Apelido + '" (' + Jogador.Posicao + ")</td><td>" + Jogador.Time + "</td><td>" + Jogador.Salvadas + "</td></tr>"
                }
                else{
                    TableSalvadas.innerHTML += '<tr><td>' + (b+1) + '</td><td>' + Jogador.Nome + ' ' + Jogador.Sobrenome1 + " (" + Jogador.Posicao + ")</td><td>" + Jogador.Time + "</td><td>" + Jogador.Salvadas + "</td></tr>"
                }
            }

            

            Table = Table + 1
        }

    }

    SuperSimulationDiv.innerHTML += "<h1>Melhores jogadores da simulação na temporada</h1><table id='OsMelhores" + Table.toString() + "' class='MelhoresJogadoresTable'> <tr> <td>Pos</td> <td>Nome</td> <td>Posicao</td> <td>Time</td> <td>Idade</td> <td>Nível</td> <td>Votos</td> </tr> </table>"
    let TableOsMelhores = document.getElementById("OsMelhores" + Table.toString())

    for(b = 0; b < 10; b++){

        let Jogador = TodosOsJogadores[b]

        if(Jogador){
            if(Jogador.Apelido){
                TableOsMelhores.innerHTML += '<tr><td>' + (b+1) + '</td> <td>' + Jogador.Nome + ' "' + Jogador.Apelido + '" ' + Jogador.Sobrenome1 + '</td> <td>' + Jogador.Posicao + '</td> <td> '+ Jogador.Time +' </td> <td>' + Jogador.Idade + '</td> <td>' + Jogador.Nivel + '</td> <td>' + Jogador.PontuacaoTotal.toLocaleString("pt-BR") + '</td> </tr>'
            }
            else{
                TableOsMelhores.innerHTML += '<tr><td>' + (b+1) + '</td> <td>' + Jogador.Nome + ' ' + Jogador.Sobrenome1 + '</td> <td>' + Jogador.Posicao + '</td> <td>' + Jogador.Time + ' </td> <td>' + Jogador.Idade + '</td> <td>' + Jogador.Nivel + '</td> <td>' + Jogador.PontuacaoTotal.toLocaleString("pt-BR") + '</td> </tr>'
            }
        }

    }

    console.log("ANO " + Year)
    console.log(PassesLivres)
    console.log(Ligas)

}

function ProximaTemp(){
    Year++

    //Jogadores
    for(let i = 0; i < Ligas.length; i++){
        
        let NowLiga = Ligas[i]

        for(let j = 1; j < NowLiga.length; j++){

            let NowDivisao = NowLiga[j]

            for(let k = 2; k < NowDivisao.length; k++){

                let NowClube = NowDivisao[k]
            
                for(let l = 0; l < NowClube.Jogadores.length; l++){
                    
                    let Jogador = NowClube.Jogadores[l]
                    Jogador.PodeSerContratado = true
                    Jogador.Idade = Jogador.Idade + 1
                    Jogador.Contrato = Jogador.Contrato - 1
                    
                    if(Jogador.Posicao != "Goleiro"){
                        Jogador.Moral = ((Jogador.Gols + Jogador.Assistencias) * 80) / Jogador.Nivel  
                        if(Jogador.Moral <= 0){
                            Jogador.Moral = 0.25
                        }
                    }
                    else{
                        Jogador.Moral = ((Jogador.Salvadas * 2) * 80) / Jogador.Nivel
                        if(Jogador.Moral <= 0){
                            Jogador.Moral = 0.25
                        }
                    }

                    Jogador.Gols = 0
                    Jogador.Assistencias = 0
                    Jogador.Salvadas = 0

                    if(Jogador.Auge){
                        if(Jogador.Nivel > Jogador.Auge){
                            Jogador.Auge = Jogador.Nivel
                        }
                    }
                    else{
                        Jogador.Auge = Jogador.Nivel
                    }

                    if(Jogador.Nivel != Jogador.Potencial){
                        let NextLevel = RandomNumberBetween(1,4)
                        NextLevel = Math.round(NextLevel + (((Jogador.Gols + Jogador.Assistencias + Jogador.Salvadas) / 3) / 10))
                        Jogador.Nivel += NextLevel
                        if(Jogador.Nivel > Jogador.Potencial){
                            Jogador.Nivel = Jogador.Potencial
                        }
                    }

                    if(Jogador.Idade > 31){
                        Jogador.Nivel = Jogador.Nivel - RandomNumberBetween(1,2)
                        if(Jogador.Nivel <   1){
                            Jogador.Nivel = 1
                        }
                        Jogador.Potencial = Jogador.Nivel
                        if(Jogador.Idade > 42){
                            if(RandomNumberBetween(1,10) < 5){

                                Aposentados.push(Jogador)
                                NowClube.Jogadores.splice(NowClube.Jogadores.indexOf(Jogador), 1)

                                let NewClubeOfNewJogador = NowDivisao[RandomNumberBetween(2, NowDivisao.length - 1)]

                                let NewJogador = {}
                                
                                if(RandomNumberBetween(1,14) != 14){
                                    NewJogador.Nacionalidade = NowLiga[0]
                                }
                                else{
                                    NewJogador.Nacionalidade = Paises[RandomNumberBetween(0,Paises.length - 1)]
                                }
                                
                                NewJogador.Nome = Nomes[NewJogador.Nacionalidade][RandomNumberBetween(0, Nomes[NewJogador.Nacionalidade].length - 1)]
                                NewJogador.Sobrenome1 = Sobrenomes[RandomNumberBetween(0, Sobrenomes.length - 1)]
                                NewJogador.Sobrenome2 = Sobrenomes[RandomNumberBetween(0, Sobrenomes.length - 1)]
                                
                                NewJogador.Posicao = Jogador.Posicao

                                NewJogador.Idade = RandomNumberBetween(14, 16)
                                NewJogador.Nivel = Jogador.Nivel + RandomNumberBetween(-30,20)
                    
                                NewJogador.Gols = 0
                                NewJogador.Assistencias = 0
                                NewJogador.Salvadas = 0

                                NewJogador.Moral = 1

                                NewJogador.Time = NewClubeOfNewJogador

                                if(NewJogador.Nivel < 1){
                                    NewJogador.Nivel = 1
                                }

                                NewJogador.Potencial = Jogador.Auge + RandomNumberBetween(-3,3)
                                if(NewJogador.Potencial > 99){
                                    NewJogador.Potencial = 99
                                }

                                if(NewJogador.Nivel > NewClubeOfNewJogador.Poder || NewJogador.Potencial > 80){
                                    if(RandomNumberBetween(1,4) == 2){
                                        NewJogador.Apelido = Apelidos[RandomNumberBetween(0, Apelidos.length - 1)]
                                    }
                                }

                                NewJogador.Valor = Math.floor((((NewJogador.Nivel + (NewJogador.Potencial * 2)) / 3) / (NewJogador.Idade * 3.41)) * (NewClubeOfNewJogador.Poder / 70) * 100000000 * NewJogador.Moral)
                                NewJogador.PodeSerContratado = false

                                NewJogador.Contrato = RandomNumberBetween(1,8)
                                
                                SubidosDaBase.push(NewJogador)
                            }
                        }
                    }

                    if(Jogador.Contrato <= 0){
                        Jogador.Contrato = 0

                        if(Jogador.Nivel >= NowClube.Poder || Jogador.Potencial >= NowClube.Poder || RandomNumberBetween(1,3) == 1){
                            Jogador.Contrato = Jogador.Contrato + RandomNumberBetween(2,5)
                        }
                    }

                    if(Jogador.Contrato > 0){
                        Jogador.Valor = Math.floor((((Jogador.Nivel + (Jogador.Potencial * 2)) / 3) / (Jogador.Idade * 3.41)) * (NowClube.Poder / 70) * 100000000 * Jogador.Moral)
                    }
                    else{
                        NowClube.Jogadores.splice(l, 1)
                        PassesLivres.push(Jogador)
                        NewInPassesLivres.push(Jogador)

                        Jogador.Valor = 0
                    }

                }

            }

        }

    }

    for(i = 0; i < PassesLivres.length; i++){
        
        let Jogador = PassesLivres[i]

        Jogador.PodeSerContratado = true
        Jogador.Idade = Jogador.Idade + 1

        Jogador.Gols = 0
        Jogador.Assistencias = 0
        Jogador.Salvadas = 0

        if(Jogador.Nivel != Jogador.Potencial){
            let NextLevel = RandomNumberBetween(1,4)
            NextLevel = Math.round(NextLevel + (((Jogador.Gols + Jogador.Assistencias + Jogador.Salvadas) / 3) / 10))
            Jogador.Nivel += NextLevel
            if(Jogador.Nivel > Jogador.Potencial){
                Jogador.Nivel = Jogador.Potencial
            }
        }

        if(Jogador.Idade > 31){
            Jogador.Nivel = Jogador.Nivel - RandomNumberBetween(2,4)
            if(Jogador.Nivel <   1){
                Jogador.Nivel = 1
            }
            Jogador.Potencial = Jogador.Nivel
            if(Jogador.Idade > 42){
                if(RandomNumberBetween(1,10) < 5){

                    Jogador.Time = "Passes Livres"
                    Aposentados.push(Jogador)
                    PassesLivres.splice(PassesLivres.indexOf(Jogador), 1)

                    let Liga = Ligas[RandomNumberBetween(0, Ligas.length - 1)]
                    let Divisao = Liga[RandomNumberBetween(1, Liga.length - 1)]
                    let NewClubeOfNewJogador = Divisao[RandomNumberBetween(2, Divisao.length - 1)]

                    let NewJogador = {}

                    if(RandomNumberBetween(1,14) != 14){
                        NewJogador.Nacionalidade = Jogador.Nacionalidade
                    }
                    else{
                        NewJogador.Nacionalidade = Paises[RandomNumberBetween(0,Paises.length - 1)]
                    }

                    NewJogador.Nome = Nomes[NewJogador.Nacionalidade][RandomNumberBetween(0, Nomes[NewJogador.Nacionalidade].length - 1)]
                    NewJogador.Sobrenome1 = Sobrenomes[RandomNumberBetween(0, Sobrenomes.length - 1)]
                    NewJogador.Sobrenome2 = Sobrenomes[RandomNumberBetween(0, Sobrenomes.length - 1)]
                                
                    NewJogador.Posicao = Jogador.Posicao

                    NewJogador.Idade = RandomNumberBetween(14, 16)
                    NewJogador.Nivel = Jogador.Nivel + RandomNumberBetween(-20,0)
                    
                    NewJogador.Moral = 1

                    NewJogador.Gols = 0
                    NewJogador.Assistencias = 0
                    NewJogador.Salvadas = 0

                    NewJogador.Time = NewClubeOfNewJogador.Nome

                    if(NewJogador.Nivel < 1){
                        NewJogador.Nivel = 1
                    }

                    NewJogador.Potencial = NewJogador.Nivel + RandomNumberBetween(10,30)
                    if(NewJogador.Potencial > 99){
                        NewJogador.Potencial = 99
                    }

                    if(NewJogador.Nivel > NewClubeOfNewJogador.Poder || NewJogador.Potencial > 80){
                        if(RandomNumberBetween(1,4) == 2){
                            NewJogador.Apelido = Apelidos[RandomNumberBetween(0, Apelidos.length - 1)]
                        }
                    }

                    NewJogador.Valor = Math.floor((((NewJogador.Nivel + (NewJogador.Potencial * 2)) / 3) / (NewJogador.Idade * 3.41)) * (NewClubeOfNewJogador.Poder / 70) * 100000000 * NewJogador.Moral)
                    NewJogador.PodeSerContratado = false

                    NewJogador.Contrato = RandomNumberBetween(1,8)
                                
                    SubidosDaBase.push(NewJogador)
                }
            }
        }

    }

    for(let i = 0; i < Ligas.length; i++){
        
        let NowLiga = Ligas[i]
        let RebaixadosPromovidos = []

        for(let j = 1; j < NowLiga.length; j++){

            let NowDivisao = NowLiga[j]

            for(k = 2; k < NowDivisao.length; k++){

                let NowClube = NowDivisao[k]

                if(NowClube.Jogadores.length < 16){

                    let UntilMin = (16 - NowClube.Jogadores.length) + RandomNumberBetween(-2, 2)

                    if(UntilMin > 0){

                        for(h = 0; h < UntilMin; h++){
                        
                            let NewJogador = {}
    
                            if(RandomNumberBetween(1,14) != 14){
                                NewJogador.Nacionalidade = NowLiga[0]
                            }
                            else{
                                NewJogador.Nacionalidade = Paises[RandomNumberBetween(0,Paises.length - 1)]
                            }
                            
                            NewJogador.Nome = Nomes[NewJogador.Nacionalidade][RandomNumberBetween(0, Nomes[NewJogador.Nacionalidade].length - 1)]
                            NewJogador.Sobrenome1 = Sobrenomes[RandomNumberBetween(0, Sobrenomes.length - 1)]
                            NewJogador.Sobrenome2 = Sobrenomes[RandomNumberBetween(0, Sobrenomes.length - 1)]
                                    
                            NewJogador.Posicao = Posicoes[RandomNumberBetween(0, Posicoes.length - 1)]
    
                            NewJogador.Idade = RandomNumberBetween(14, 16)
                            NewJogador.Nivel = NowClube.Poder + RandomNumberBetween(-20, -10)
                            
                            NewJogador.Moral = 1

                            NewJogador.Gols = 0
                            NewJogador.Assistencias = 0
                            NewJogador.Salvadas = 0
    
                            NewJogador.Time = NowClube
    
                            if(NewJogador.Nivel < 1){
                                NewJogador.Nivel = 1
                            }
    
                            NewJogador.Potencial = NewJogador.Nivel + RandomNumberBetween(10,25)
                            if(NewJogador.Potencial > 99){
                                   NewJogador.Potencial = 99
                            }
    
                            if(NewJogador.Nivel > NowClube.Poder || NewJogador.Potencial > 80){
                                if(RandomNumberBetween(1,4) == 2){
                                    NewJogador.Apelido = Apelidos[RandomNumberBetween(0, Apelidos.length - 1)]
                                }
                            }
    
                            NewJogador.Valor = Math.floor((((NewJogador.Nivel + (NewJogador.Potencial * 2)) / 3) / (NewJogador.Idade * 3.41)) * (NowClube.Poder / 70) * 100000000 * NewJogador.Moral)
                            NewJogador.PodeSerContratado = false
    
                            NewJogador.Contrato = RandomNumberBetween(1,8)
                                    
                            SubidosDaBase.push(NewJogador)
    
                        }

                    }

                }

            }

        }

    }

    //Times
    for(let i = 0; i < Ligas.length; i++){
        
        let NowLiga = Ligas[i]
        let RebaixadosPromovidos = []

        for(let j = 1; j < NowLiga.length; j++){

            let NowDivisao = NowLiga[j]
            let QuantosTimes = 0

            for(let k = 2; k < NowDivisao.length; k++){
                
                let MediaDeOvr = []
                let MediaFinalDeOver = 0

                for(p = 0; p < NowDivisao[k].Jogadores.length; p++){

                    MediaDeOvr.push(NowDivisao[k].Jogadores[p].Nivel)

                }

                for(b = 0; b < MediaDeOvr.length; b++){

                    MediaFinalDeOver += MediaDeOvr[b]

                }

                MediaFinalDeOver = MediaFinalDeOver / MediaDeOvr.length
                NowDivisao[k].Poder = Math.round(MediaFinalDeOver)  

            }

            for(let k = 2; k < NowDivisao.length; k++){
                QuantosTimes++
            }

            for(let k = 2; k < NowDivisao.length; k++){
                
                let NowClube = NowDivisao[k]

                let PremiacaoPrimeiroLugar = Math.round(NowDivisao[1] * 0.6)
                let PremiacaoSegundoLugar = Math.round(NowDivisao[1] * 0.2)
                let PremiacaoTerceiroLugar = Math.round(NowDivisao[1] * 0.1)
                let PremiacaoOutros = Math.round((NowDivisao[1] * 0.1) / ((NowDivisao.length - 2) - 3))

                if((QuantosTimes - NowClube.PosicaoNaTabela) < 3 && typeof NowLiga[j+1] == 'object'){
                    RebaixadosPromovidos.push(NowClube)
                    RebaixadosPromovidos.push("Rebaixado")
                    RebaixadosPromovidos.push(j)
                }
                
                if((QuantosTimes - NowClube.PosicaoNaTabela) > 16 && typeof NowLiga[j-1] == 'object'){
                    RebaixadosPromovidos.push(NowClube)
                    RebaixadosPromovidos.push("Promovido")
                    RebaixadosPromovidos.push(j)

                    if((QuantosTimes - NowClube.PosicaoNaTabela) == 19){
                        NowClube.Dinheiro = NowClube.Dinheiro + PremiacaoPrimeiroLugar
                    }
                    if((QuantosTimes - NowClube.PosicaoNaTabela) == 18){
                        NowClube.Dinheiro = NowClube.Dinheiro + PremiacaoSegundoLugar
                    }
                    if((QuantosTimes - NowClube.PosicaoNaTabela) == 17){
                        NowClube.Dinheiro = NowClube.Dinheiro + PremiacaoTerceiroLugar
                    }

                }
                else{
                    NowClube.Dinheiro = NowClube.Dinheiro + PremiacaoOutros
                }

            }

            for(k = 0; k < SubidosDaBase.length; k++){

                let Jogador = SubidosDaBase[k]
                let IndexOfTeam = NowDivisao.indexOf(Jogador.Time)

                if(IndexOfTeam >= 0){
                    
                    Jogador.Time = Jogador.Time.Nome
                    NowDivisao[IndexOfTeam].Jogadores.push(Jogador)

                }
            }

        }
        
        for(let j = 0; j < RebaixadosPromovidos.length; j+=3){
            DivisaoAtual = NowLiga[RebaixadosPromovidos[j+2]]

            if(RebaixadosPromovidos[j+1] == "Rebaixado"){

                let ProximaDivisao = NowLiga[RebaixadosPromovidos[j+2]+1]

                DivisaoAtual.splice(DivisaoAtual.indexOf(RebaixadosPromovidos[j]), 1)
                ProximaDivisao.push(RebaixadosPromovidos[j])

            }
            else{
                let ProximaDivisao = NowLiga[RebaixadosPromovidos[j+2]-1]

                DivisaoAtual.splice(DivisaoAtual.indexOf(RebaixadosPromovidos[j]), 1)
                ProximaDivisao.push(RebaixadosPromovidos[j])
            }
        }

    }
}

function proximaTempNoButton(){
    ProximaTemp()
    Transferencias()
    SimularLigas()

    if((BeforeSimulados - Simulados) != 0){
        Simulados++
        setTimeout(proximaTempNoButton, 1000)
    }
    else{
        BeforeSimulados = Simulados
    }

}

function proximaTempAll(){
    ProximaTemp()
    Transferencias()
    SimularLigas()

    BeforeSimulados = document.getElementById("temporadasSimuladas").value
    Simulados = 1

    if((BeforeSimulados - Simulados) > 0){
        Simulados++
        setTimeout(proximaTempNoButton, 1000)
    }

}

CriarJogadores()
Transferencias()
SimularLigas()  