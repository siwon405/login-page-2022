const { createLogger, transports, format } = require("winston");
const { combine, timestamp, label, simple, colorize , printf} = format;

const printFormat = printf(({ timestamp, label,level, message }) => {
                return `${timestamp} [ ${label} - level:${level}] ${message}`;
            });

const printLogFormat = {
    file: combine(
            label({
                label: "log 관리",
            }),
            timestamp({
                format: "YYYY-MM-DD HH:mm:dd",
            }),
            printFormat
        ),
    console: combine(
        colorize(),
        simple()
        ),
    };

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.file,
        }),
        console: new transports.Console({
        level: "info",
        format: printLogFormat.console,
        }),
}

const logger = createLogger({
    transports: [ opts.file ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add( opts.console );
}

module.exports = logger;