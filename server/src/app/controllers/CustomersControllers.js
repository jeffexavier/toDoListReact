import Customer from "../models/Customer";

const customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
    { id: 2, name: "Jefferson Xavier", site: "https://jeffersonxavier.com.br" },
    { id: 3, name: "BIUD", site: "https://app.biud.com.br" },
];

const listagem = { list: 1000 };

class CustomersController {
    // Listagem dos Customers
    async index(req, res) {
        const data = await Customer.findAll(listagem);

        return res.json(data);
    }

    // Lista um registro
    show(req, res) {
        const id = parseInt(req.params.id, 10);
        const customer = customers.find((item) => item.id === id);
        const status = customer ? 200 : 404;

        console.debug("GET :: /customers/:id ", customer);

        return res.status(status).json(customer);
    }

    // Cria um registro
    create(req, res) {
        const { name, site } = req.body;
        const id = customers[customers.length - 1].id + 1;
        const newCustomer = { id, name, site };

        customers.push(newCustomer);

        return res.status(201).json(newCustomer);
    }

    // Atualiza um registro
    update(req, res) {
        const id = parseInt(req.params.id, 10);
        const { name, site } = req.body;
        const index = customers.findIndex((item) => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            customers[index] = {
                id: parseInt(id, 10),
                name: name || customers[index].name,
                site: site || customers[index].site,
            };
        }

        return res.status(status).json(customers[index]);
    }

    // Deleta um registro
    destroy(req, res) {
        const id = parseInt(req.params.id, 10);
        const index = customers.findIndex((item) => item.id === id);
        const status = index >= 0 ? 200 : 400;

        if (index >= 0) {
            customers.splice(index, 1);
        }

        return res.status(status).json("Excluído com sucesso!");
    }
}

export default new CustomersController();
