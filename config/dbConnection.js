var {Pool} =require('pg'); 
pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'portal_noticias',
    port:'5432'
    });
    
pool.connect();

var conectBD = function (){
    console.log('Conexao com o bd foi estabelecida');               
            return pool;      
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o bd');
    return conectBD;
}