const cron = require('node-cron');
const axios = require('axios');


const MicrosService = async () => {
  const { data } = await axios('http://localhost:3000/pedidos');
  console.log(data);
}    


module.exports = cron.schedule('* */10 * * * *', MicrosService, {
    scheduled: false
});