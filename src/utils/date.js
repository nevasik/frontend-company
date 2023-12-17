import moment from "moment";

function formatDate(date) {
    return moment(date).format('DD-MM-YYYY')
}

export {formatDate};