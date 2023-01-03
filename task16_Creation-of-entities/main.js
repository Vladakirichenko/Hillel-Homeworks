
    const numUsers = +prompt('users')
    i = 0;
    const arrUsers = []
    let users;
        do {
            const name = prompt('enter name')
            const age = +prompt('enter age')
            if (name === null || age === null) {
                break;
            }
            users = new Person(name, age)
            console.log(users);
            i++;
            arrUsers.push(users)
        } while (i < numUsers)


    const numCars = +prompt('number of cars')
    j = 0;
    const arrCars = []
    let cars;
    do {
        const model = prompt('enter model')
        const speed = +prompt('enter speed')
        const color = prompt('enter color')
        if (model === null || speed === null || color === null) {
            break;
        }
        cars = new Car(model, speed, color, users)
        console.log(cars);
        j++;
        arrCars.push(cars)
    } while (j < numCars)




const garage = new Garage(arrUsers, arrCars)
console.log(garage);