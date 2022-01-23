const expres = require('express');
const ManagerCron = require('./cron-node/manager-cron')

const app = expres();


app.listen(3333, ()=>{
    console.log("Servidor Ligado");
    ManagerCron.run();
});