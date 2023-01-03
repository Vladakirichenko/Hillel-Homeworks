function Car (model, speed, color, owner) {
    this.model = model,
    this.speed = speed,
    this.color = color,
    this.infoCar = function () {
        console.log(`Model: ${model} Speed: ${speed}km/h Color: ${color}`);
    }
    this.owner = function () {
        console.log(this.owner = owner);
    }
}