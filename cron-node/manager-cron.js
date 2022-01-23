const MicrosService = require('./cron/MicrosService');

class ManagerCron {
    jobs = [];
    constructor(){
        this.jobs = [MicrosService];
    }
    run(){
        this.jobs.forEach(job => job.start())
    }
}

module.exports = new ManagerCron;