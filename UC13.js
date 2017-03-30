function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = function() {
        var volume;
        volume = length * length * length;
        return volume;
    }
    this.density = function() {
        var density;
        density = mass / length * length * length;
        return density;
    }
    this.surfaceArea = function() {
        var surfaceArea;
        surfaceArea = length * length * 6;
        return surfaceArea;
    }
};

function Pet(name, species, sleepy, hunger, awake) {
    this.name = name;
    this.species = species;
    this.sleepy = sleepy;
    this.hunger = hunger;
    this.awake = awake;
    this.speak = function() {
        if (this.species === "Dog") {
            this.hunger += 1;
            this.sleepy += 1;
            return "Woof! That means I love you!";
        } else if (this.species === "Cat") {
            this.hunger += 1;
            this.sleepy += 1;
            return "Ugh. meow.";
        } else {
            return "";
        }
    }
    this.eat = function() {
        this.hunger = 0;
        this.sleepy += 1;
        if (this.species === "Dog") {
            return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!";
        } else if (this.species === "Cat") {
            return "Ugh, I guess I'll eat this.";
        } else {
            return "";
        }
    }
    this.nap = function() {
        this.sleepy = 0;
        this.awake = false;
        return "Zzzz...";
    }
    this.wakeUp = function() {
        this.sleepy = 0;
        this.hunger = 4;
        this.awake = true;
        if (this.species === "Dog") {
            return "I'm awake! Let's eat and then play! I love you!";
        } else if (this.species === "Cat") {
            return "Ugh, I'm awake now. Is there anything to eat around here?";
        } else {
            return "";
        }
    }
    this.rollOver = function() {
        if (this.species === "Dog" && this.awake == false) {
            return "Zzzz...";
        } else if (this.species === "Dog" && this.hunger >= 4) {
            return "I'm hungry! Let's eat first. I love you!";
        } else if (this.species === "Dog" && this.sleepy >= 5) {
            return "Yawn. Let's play after a nap. I love you!";
        } else if (this.species === "Dog" && this.awake == true && this.hunger < 4 && this.sleepy < 5) {
            this.hunger += 1;
            this.sleepy += 1;
            return "Rolling! Now what? I love you!";
        } else if (this.species === "Cat" && this.awake == false) {
            return "Zzzz...";
        } else if (this.species === "Cat" && this.hunger >= 4) {
            return "Ugh. Feed me before I'll even think about it.";
        } else if (this.species === "Cat" && this.sleepy >= 5) {
            return "Ugh. I need a 12 hour nap first.";
        } else if (this.species === "Cat" && this.awake == true && this.hunger < 4 && this.sleepy < 5) {
            this.hunger += 1;
            this.sleepy += 1;
            return "Ugh. I'm a cat. I only roll over if I want to.";
        } else {
            return "";
        }
    }
    this.fetch = function() {
        if (this.species === "Dog" && this.awake == false) {
            return "Zzzz...";
        } else if (this.species === "Dog" && this.hunger >= 4) {
            return "I'm hungry! Let's eat first. I love you!";
        } else if (this.species === "Dog" && this.sleepy >= 5) {
            return "Yawn. Let's play after a nap. I love you!";
        } else if (this.species === "Dog" && this.awake == true && this.hunger < 4 && this.sleepy < 5) {
            this.hunger += 1;
            this.sleepy += 1;
            return "Must get the stick! I love you!";
        } else if (this.species === "Cat" && this.awake == false) {
            return "Zzzz...";
        } else if (this.species === "Cat" && this.hunger >= 4) {
            return "Ugh. Feed me before I'll even think about it.";
        } else if (this.species === "Cat" && this.sleepy >= 5) {
            return "Ugh. I need a 12 hour nap first.";
        } else if (this.species === "Cat" && this.awake == true && this.hunger < 4 && this.sleepy < 5) {
            this.hunger += 1;
            this.sleepy += 1;
            return "Ugh. I'm a cat. I don't fetch.";
        } else {
            return "";
        }
    }
    this.shake = function() {
        if (this.species === "Dog" && this.awake == false) {
            return "Zzzz...";
        } else if (this.species === "Dog" && this.hunger >= 4) {
            return "I'm hungry! Let's eat first. I love you!";
        } else if (this.species === "Dog" && this.sleepy >= 5) {
            return "Yawn. Let's play after a nap. I love you!";
        } else if (this.species === "Dog" && this.awake == true && this.hunger < 4 && this.sleepy < 5) {
            this.hunger += 1;
            this.sleepy += 1;
            return "Nice to meet you! I love you!";
        } else if (this.species === "Cat" && this.awake == false) {
            return "Zzzz...";
        } else if (this.species === "Cat" && this.hunger >= 4) {
            return "Ugh. Feed me before I'll even think about it.";
        } else if (this.species === "Cat" && this.sleepy >= 5) {
            return "Ugh. I need a 12 hour nap first.";
        } else if (this.species === "Cat" && this.awake == true && this.hunger < 4 && this.sleepy < 5) {
            this.hunger += 1;
            this.sleepy += 1;
            return "Ugh. I'm a cat. I never shake";
        } else {
            return "";
        }
    }
};
