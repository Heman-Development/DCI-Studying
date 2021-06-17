function addition(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    })
}

function multiplication(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous * current;
    })
}

function division(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous / current;
    })
}

function division(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous - current;
    })
}