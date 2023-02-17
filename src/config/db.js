const {Client} = require('pg')
const client = new Client({
    user:"postgres",
    host: process.env.DB_HOST || 'localhost',
    database: 'crud',
    password: 'root',
    port: 5432,
    })

client.connect( (err) => {
 if(err){
     console.log(err)
 }else{
     console.log("Database Connected Successfully" )
 }
})

module.exports = client