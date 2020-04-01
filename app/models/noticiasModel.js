module.exports = function(){

    this.getNoticias = function(connection, callback){
        console.log('teste1');
        connection.query('SELECT * FROM noticias', callback);
    }

    this.getNoticia = function(connection, callback){
        console.log('teste2');
        connection.query('SELECT * FROM noticias WHERE id_noticias = 1', callback);
        console.log(callback);
    }

    return this;

}