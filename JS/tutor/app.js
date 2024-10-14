class CarInventory {
    constructor() {
        this.cars = []
    }

    addCar(make, model, year, color) {
        if (!make || !model || !year || !color) return undefined
        if (this.cars.some((car) => car.make.toUpperCase() === make.toUpperCase() && car.model.toUpperCase() === model.toUpperCase())) return undefined
        const car = {make, model, year, color}
        this.cars.push(car)
        return car
    }

    getAllCars() {
        return this.cars
    }

    findCarsByColor(color) {
        return this.cars.filter((car) => car.color.toUpperCase() === color.toUpperCase())
    }

    updateCar(make, model, updatedDetails) { 
        let findIndex = this.cars.findIndex((car) => car.make.toUpperCase() === make.toUpperCase() && car.model.toUpperCase() === model.toUpperCase())
        if (findIndex < 0) return undefined
        let updateCar = {...this.cars[findIndex], ...updatedDetails}
        this.cars.splice(findIndex, 1, updateCar)
        return updateCar
    }

    deleteCar(make, model) {
        let findIndex = this.cars.findIndex((car) => car.make.toUpperCase() === make.toUpperCase() && car.model.toUpperCase() === model.toUpperCase())
        return this.cars.splice(findIndex, 1)
    }
}

// Test Cases
const myInventory = new CarInventory()

// Test addCar
console.log(myInventory.addCar('Toyota', 'Camry', 2020, 'Blue'))
// Expected output: { make: 'Toyota', model: 'Camry', year: 2020, color: 'Blue' }

console.log(myInventory.addCar('Honda', 'Civic', 2019, 'Black'))
// Expected output: { make: 'Honda', model: 'Civic', year: 2019, color: 'Black' }

console.log(myInventory.addCar('Toyota', 'Camry', 2021, 'Red'))
// Expected output: undefined (duplicate entry)

console.log(myInventory.addCar('Ford', 'Mustang'))
// Expected output: undefined (missing details)

// Test getAllCars
console.log(myInventory.getAllCars())
// Expected output: Array of all added cars, e.g., [{ make: 'Toyota', model: 'Camry', year: 2020, color: 'Blue' }, { make: 'Honda', model: 'Civic', year: 2019, color: 'Black' }]

// Test findCarsByColor
console.log(myInventory.findCarsByColor('Blue'))
// Expected output: [{ make: 'Toyota', model: 'Camry', year: 2020, color: 'Blue' }]

console.log(myInventory.findCarsByColor('Red'))
// Expected output: [] (no car with color Red in inventory)

// Test updateCar
console.log(myInventory.updateCar('Toyota', 'Camry', { year: 2022, color: 'Green' }))
// Expected output: { make: 'Toyota', model: 'Camry', year: 2022, color: 'Green' } (updated car object)

console.log(myInventory.updateCar('Ford', 'Focus', { year: 2020 }))
// Expected output: undefined (car not found)

// Test deleteCar
console.log(myInventory.deleteCar('Honda', 'Civic'))
// Expected output: { make: 'Honda', model: 'Civic', year: 2019, color: 'Black' } (deleted car object)

console.log(myInventory.deleteCar('Tesla', 'Model 3'))
// Expected output: undefined (car not found)

// Verify remaining cars in inventory
console.log(myInventory.getAllCars())
// Expected output: Remaining cars after deletion, e.g., [{ make: 'Toyota', model: 'Camry', year: 2022, color: 'Green' }]