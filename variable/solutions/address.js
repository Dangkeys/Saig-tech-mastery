let address = {
    city: "New York",
    postalCode: "10001",
    details: {
        street: "5th Avenue",
        number: 742
    }
};

let streetName = address.details.street;
console.log(streetName); // Outputs: 5th Avenue