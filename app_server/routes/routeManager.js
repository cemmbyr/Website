var routeHome = require('./homeRoutes');

module.exports=function(app){
    app.use('/',routeHome);
}