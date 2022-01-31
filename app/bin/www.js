const app = require("../../app");
const logger = require("../src/config/logger");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`${PORT} PORT로 서버 가동`);
});