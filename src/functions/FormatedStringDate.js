export default function formatStringDate(date) {
    if (date !== "") {
        const dia = date.split("-")[2];
        const mes = date.split("-")[1];
        const ano = date.split("-")[0];

        return `${`0${dia}`.slice(-2)} / ${`0${mes}`.slice(-2)} / ${ano}`;
        // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    }
    return "";
}
