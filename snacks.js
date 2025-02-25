//SNACK 1
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); //Double Cheese Burger
console.log(secondBurger.name); //Double Cheese Burger


//SNACK 2
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); //Salad
console.log(secondBurger.ingredients[0]); //Salad


//SNACK 3
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);
//per ogni structuredClone vengono creati 3 oggetti quindi un totale di 6 (contando il primo 9)


//SNACK 4
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

//Qual è il metodo migliore per clonare l’oggetto chef, e perché?
//Il metodo migliore è lo Spread Operator perché copia le funzioni e non ci sono oggetti annidati

//Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
//Il metodo migliore è structuredClone() perché copia oggetti annidati e non ci sono funzioni
//Non è Json.parse(JSON.stringify()) perché c'è la data ed è più comune utilizzare structuredClone()


//SNACK 5
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); //Anonymous Chef
console.log(secondBurger.maker.name); //Chef Hyur
console.log(hamburger.maker.restaurant.name); //Hyur's Burgers
console.log(secondBurger.maker.restaurant.name); //Hyur's II


//SNACK 6
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

//Qual è il metodo migliore per clonare l’oggetto chef, e perché?
//Nessun metodo visto è il migliore ma si può usare una funzione ricorsiva o _.cloneDeep(obj) (Lodash)
function deepClone(oggetto) {
    if (typeof oggetto !== "object" || oggetto === null) return oggetto

    const nuovoOggetto = Array.isArray(oggetto) ? [] : {}

    for (let chiave in oggetto) {
        nuovoOggetto[chiave] = deepClone(oggetto[chiave])
    }

    return nuovoOggetto
}

const nuovoChef = deepClone(chef)
console.log(nuovoChef)