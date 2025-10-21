const sequelize = require('../src/models/index.js').sequelize;

sequelize.sync({ alter: true })
    .then(() => {
        console.log("All models were synchronized successfully.");
        process.exit(0);
    })
    .catch((error) => {
        console.error("An error occurred while synchronizing the models:", error);
        process.exit(1);
    });