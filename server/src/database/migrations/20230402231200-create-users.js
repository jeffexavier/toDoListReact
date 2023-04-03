module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                autoIcrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password_hash: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            provider: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                unique: true,
            },
            created_at: {
                type: Sequelize.DATE,
                default: false,
                allowNull: false,
            },
            update_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable("users");
    },
};
