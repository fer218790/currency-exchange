const {DataTypes}=require('sequelize');
const sequelize=require('../db');

const TipodeCanbio =sequelize.define('TipodeCanbio',{
id:{
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey:true
},
nombre:{
    type:DataTypes.STRING,
    allowNull:false
},
sigla:{
    type:DataTypes.STRING,
    allowNull:false
},
valor:{
   type:DataTypes.FLOAT,
   allowNull:false 
}

},{
    timestamps:true,
    tableName:'TipodeCanbios'
});
module.exports=TipodeCanbio;