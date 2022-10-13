const app = require('./app');
const { connect} = require('./database');


//Route par defaul
app.get('/',function(req, res){
   res.send("Lep DIAM");
});


const PORT = 4000;
// app.listen(PORT, function(){
//     console.log('App listening at port : 4000');
// });

async function main(){
    await connect();
    await app.listen(PORT);
    console.log("App listening at port : ",PORT);
}

main();
