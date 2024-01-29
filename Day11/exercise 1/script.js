// exercise 1
console.log("Exercise 1: Shopping Cart");

class Item {
    constructor (name, price, stock, sold = 0) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.sold = sold;
    }

    logDetails () {
        console.log("Item:", this.name);
        console.log("Price:", this.price);
        console.log("Number of stock:", this.stock);
        console.log("Total sold:", this.sold);
        return this;
    }

    buy () {
        if (this.stock) {
            console.log("Buying", this.name);
            this.sold++;
            this.stock--;
        } else
            console.log(this.name, "is out of stock");
        return this;
    }

    returnItem () { // I didn't use "return" to avoid confusion
        if (this.sold) {
            console.log("Returning", this.name);
            this.sold--;
            this.stock++;
        } else
            console.log("No item to return");
        return this;
    }
}

item1 = new Item("Mirinda Orange (330mL)", 57.5, 2);
item2 = new Item("Royal Tru Orange (320mL)", 30.5, 7);
item3 = new Item("Fanta Orange (330mL)", 60, 5);

console.log("Item 1");
item1.buy().buy().buy().returnItem().logDetails();
console.log("");

console.log("Item 2");
item2.buy().buy().returnItem().returnItem().logDetails();
console.log("");

console.log("Item 3");
item3.returnItem().returnItem().returnItem().logDetails();
console.log("");

// exercise 2
console.log("Exercise 2: House");

class House {
    constructor (location, price, lot, type) {
        this.location = location;
        this.price = price;
        this.lot = lot;
        this.type = type;
        this.discount = this.type == "Pre-selling" ? 0.2 : 0.05;
        this.show_all();
    }

    show_all () { // From Dether, Dion and LJ: ` method so the print is cleaner + less console.log() + sqm in console.log not in init
        console.log("Location:", this.location);
        console.log("Price:", this.price);
        console.log("Lot:", this.lot);
        console.log("Type:", this.type);
        console.log("Discount:", this.discount);
        console.log("Total Price:", this.price * (1 - this.discount));
        return this;
    }
}

console.log("House 1");
house1 = new House("La Union", 1500000, "100sqm", "Pre-selling");
console.log("");

console.log("House 2");
house2 = new House("Metro Manila", 1000000, "150sqm", "Ready for Occupancy");
console.log("");

console.log("House 3");
house3 = new House("Bohol", 2000000, "200sqm", "For Sale");
console.log("");

console.log("House 4");
house4 = new House("Zambuanga del Sur", 500000, "50sqm", "For Renovation");
console.log("");

console.log("House 5");
house5 = new House("Palawan", 3000000, "100sqm", "Pre-selling");
console.log("");

// exercise 3
console.log("Exercise 3: Email builder");

class emailBuilder {
    constructor (recipient, subject, body, attachments = []) {
        this.recipient = recipient;
        this.subject = subject;
        this.body = body;
        this.attachments = attachments;
    }

    send () {
        if (this.recipient === undefined || !this.recipient.length)
            alert("Error: No recipient.");
        else {
            let confirm = "N";
            if (!this.subject.length) {
                alert("Warning: No subject.");
                confirm = prompt("Please confirm to send without subject. Type \"Y\" to confirm.");
            }

            if (this.subject.length || confirm == "Y") {
                console.log("Sending email:");
                console.log("Recipient:", this.recipient);
                console.log("Subject:", this.subject);
                console.log("Body:", this.body);
                console.log("Attachments:", this.attachments.length > 0 ? this.attachments.join(', ') : "None");
            }
        }
        return this;
    }
}

emptyMail = new emailBuilder();
emptyRecipient = new emailBuilder("", "Morning Prayer", "Hello! Let us start the day with a morning prayer.", ["wave.gif", "morning_prayer.png"]);
emptySubject = new emailBuilder("abc@example.com", "", "Hello! Let us start the day with a morning prayer.", ["wave.gif", "morning_prayer.png"]);
emptyBody = new emailBuilder("abc@example.com", "Morning Prayer", "", ["wave.gif", "morning_prayer.png"]);
emptyAttachment = new emailBuilder("abc@example.com", "Morning Prayer", "Hello! Let us start the day with a morning prayer.");
completeMail = new emailBuilder("abc@example.com", "Morning Prayer", "Hello! Let us start the day with a morning prayer.", ["wave.gif", "morning_prayer.png"]);