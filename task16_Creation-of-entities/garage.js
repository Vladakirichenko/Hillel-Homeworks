function Garage (persons, cars) {
    this.person = persons,
    this.cars = cars,
    this.carsOwner = function () {
        console.log(persons);
    }
    this.carList = function () {
        console.log(cars);
    }
}