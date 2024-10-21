const {Sequelize}=require('sequelize');
const {PORT,datebase,usernames,password,host}=process.env;
console.log(PORT,datebase,usernames,password,host);
const sequelize = new Sequelize(datebase,usernames,password,
    {
        host,
        dialect:'postgres',
        logging:false

});
module.exports=sequelize;

