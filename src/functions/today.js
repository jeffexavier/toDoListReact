export default function today() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    // return ("0"+day).slice(-2) + ' / ' + ("0"+month).slice(-2) + ' / ' + year;
    return `${year}-${`0${month}`.slice(-2)}-${`0${day}`.slice(-2)}`;
}
