module.exports = function(app){

    app.get('/noticia', function(req,res){
        console.log('aqui');
        var connection = app.config.dbConnection();
        console.log(connection);
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, function(error, result){
            res.render('noticias/noticia', { noticia : result });
        });

    });
}