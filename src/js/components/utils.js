let toDate = new Date();
let fromDate = new Date();
fromDate.setDate(fromDate.getDate() - 7);

function getStringDate(aDate){
        let dd = aDate;
        let yy = dd.getYear();
        let mm = dd.getMonth() + 1;
        dd = dd.getDate();
        if (yy < 2000) { yy += 1900; }
        if (mm < 10) { mm = '0' + mm; }
        if (dd < 10) { dd = '0' + dd; }
        const rs = yy + '-' + mm + '-' + dd;
        return rs;
    }


const from = getStringDate(fromDate)
const to = getStringDate(toDate)

export { from, to }