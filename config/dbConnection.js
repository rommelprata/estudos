const {Pool} = require('pg');

var conectBD = function(){
    console.log('Conexao com o bd foi estabelecida');
    var pool = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'portal_noticias',
        port:'5432'
        });
    pool.connect();    
    return pool;
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o bd');
    return conectBD;
}