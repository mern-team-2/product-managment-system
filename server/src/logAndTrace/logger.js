const { createLogger, format, transports } = require('winston');

const logConfiguration = {
    transports: [
        
        new transports.Console({
            level: 'warn'
        }),
        new transports.File({
            level: 'error',
            filename: './src/logAndTrace/logs/serverError.log',
            format:format.combine(
                format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                format.align(),
                format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
            )
        }
        ),
        new transports.File({
            level: 'info',
            filename: './src/logAndTrace/logs/serverInfo.log',
            format:format.combine(
                format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                format.align(),
                format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
            )
        }
        )
    ]
};


const logger = createLogger(logConfiguration);
module.exports = {logger}