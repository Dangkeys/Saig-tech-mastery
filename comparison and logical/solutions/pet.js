let pet = {
    type: "dog",
    name: "Buddy",
};

let petType;
if (pet.type === "dog") {
    petType = "This is a dog named " + pet.name;
} else if (pet.type === "cat") {
    petType = "This is a cat named " + pet.name;
} else {
    petType = "This is a " + pet.type + " named " + pet.name;
}

console.log(petType);
