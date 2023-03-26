export default function today() {

    const today = new Date();
  
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
  
    // return ("0"+day).slice(-2) + ' / ' + ("0"+month).slice(-2) + ' / ' + year;
    return year + '-' + ("0"+month).slice(-2) + '-' + ("0"+day).slice(-2);
    }