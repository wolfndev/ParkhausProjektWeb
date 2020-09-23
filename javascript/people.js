  // Klasse für Kunden erstellen
  class Customer{
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    get name() {
        return this.name;
    }
}

// Klasse für Familie
class Family extends Customer{
    constructor(id, name, peopleCount) {
        super(id, name);
        this.peopleCount = peopleCount;
    }
}

// Klasse für Mitarbeiter des Parkhauses
class Employee{
    constructor(id, name, salary, workingDescription) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.workingDescription = workingDescription;
    }

    get name() {
        return this.name;
    }

    get salary() {
        return this.salary;
    }

    get workingDescription() {
        return this.workingDescription;
    }
} 
 
 // Klasse der Manager
 class Manager extends Employee{
    constructor(id, name, salary, workingDescription) {
        super(id, name, salary, workingDescription);
    }
}

// Klasse der Parkhausbetreiber
class CarParkOwner extends Employee{
    constructor(id, name, salary, workingDescription) {
        super(id, name, salary, workingDescription);
    }
}

// Klasse der Schrankenwärter
class CrossingKeeper extends Employee{
    constructor(id, name, salary, workingDescription) {
        super(id, name, salary, workingDescription);
    }
}

// Klasse der Einweiser
class PositionAdapter extends Employee{
    constructor(id, name, salary, workingDescription) {
        super(id, name, salary, workingDescription);
    }
}

// Klasse der Investoren
class Investor extends Customer{
    constructor(id, name, salary, workingDescription) {
        super(id, name, salary, workingDescription);
    }
}

// Funktion, um ein Objekt in JSON-Format zu überführen
function createJSON(Cars) {
    var string = JSON.stringify(Cars);
    console.log(string);
}