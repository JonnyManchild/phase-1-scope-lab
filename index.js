var customerName = "bob"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {if (true) {
    bestCustomer = "not bob"
}}

function overwriteBestCustomer() {
   bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "bob"

function changeLeastFavoriteCustomer(name) {
    leastFavoriteCustomer = `${name}`
}