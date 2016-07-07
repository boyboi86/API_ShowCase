*/Set your mLab Url below/*

var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + 'mLab_URL';
    }

}
