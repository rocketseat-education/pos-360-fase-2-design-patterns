const Logger = require("./Logger")

const logger1 = new Logger()
const logger2 = new Logger()

logger1.log("Primeira mensagem")
logger2.log("Segunda mensagem")

logger1.print()
logger2.print()
