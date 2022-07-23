import logger from 'pino';

const log = logger({
    base : { pid : false},
    transport: {
        target : 'pino-pretty',
        options: {
            colorized:true
        }
    },
    timestamp: ()=> ` ,"time" : "${new Date().toLocaleTimeString()}"`
});

export default log;