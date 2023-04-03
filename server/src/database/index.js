import Sequelize from "sequelize";
import config from "../config/database";
import Customer from "../app/models/Customer";
import Contacts from "../app/models/Contacts";
import User from "../app/models/User";

const models = [Customer, Contacts, User];

class Database {
    constructor() {
        this.connection = new Sequelize(config);
        this.init();
    }

    init() {
        models.forEach((model) => model.init(this.connection));
    }
}
export default new Database(); // ERA SÓ CHAMAR A FUNÇÃO DIRETO COM O '()' e exportar um new Database ao invés do Database.
