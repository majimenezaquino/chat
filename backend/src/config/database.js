const mongoose = require('mongoose');
const {DB} = require('./index');

module.exports = {
    connection: null,
    connect: () => {
        if (this.connection) return this.connection;
        return mongoose.connect(DB, {useUnifiedTopology: true,useNewUrlParser: true}).then(connection => {
            this.connection = connection;
            console.log('Conexion a DB exitosa');
        }).catch(err => console.log(err))
    }
}