function Person (name, age) {
    this.name = name,
    this.age = age,
    this.showInfo = function() {
        console.log(`Name: ${this.name}, age:${this.age}`);
    }
}
