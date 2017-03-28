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

function Pet(name, species, sleepy, hunger) {
    this.name = name;
    this.species = species;
    this.sleepy = sleepy;
    this.hunger = hunger;
    this.speak = function() {
        if (this.species === "Dog") {
            return "Woof! That means I love you!";
        } else if (this.type === "Cat") {
            return "Ugh. meow.";
        } else {
            return "";
        }
    }
};
