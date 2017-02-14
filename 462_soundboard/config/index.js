var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' 
        + configValues.pwd + '@ds025409.mlab.com:25409/nodetodosample';
    }
}
