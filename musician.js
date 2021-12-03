// grab these objects from sequalize
const {db, DataTypes, Model} = require('./db');

/**
 * Represents a Musician
 */
class Musician extends Model {

    // add methods here

}

Musician.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
}, {
    sequelize : db,
    timestamps: false,
});


module.exports = {
    Musician 

};
