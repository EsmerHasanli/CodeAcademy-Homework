var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Motorcycle"] = 1] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
var EngineType;
(function (EngineType) {
    EngineType[EngineType["DOHC"] = 0] = "DOHC";
    EngineType[EngineType["SOHC"] = 1] = "SOHC";
    EngineType[EngineType["TURBO"] = 2] = "TURBO";
})(EngineType || (EngineType = {}));
var Car = /** @class */ (function () {
    function Car(brandName, modelName, year, fuelCapacity, currentFuel, mileage, fuelFor1KM, engine, vehicleType) {
        this.brandName = brandName;
        this._modelName = modelName;
        this._year = year;
        this._fuelCapacity = fuelCapacity;
        this._currentFuel = currentFuel;
        this._mileage = mileage;
        this._fuelFor1KM = fuelFor1KM;
        this._engine = engine;
        this._vehicleType = VehicleType.Car;
    }
    Object.defineProperty(Car.prototype, "modelName", {
        get: function () {
            return this._modelName;
        },
        set: function (value) {
            this._modelName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "year", {
        get: function () {
            return this.year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuelCapacity", {
        get: function () {
            return this._fuelCapacity;
        },
        set: function (value) {
            this._fuelCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "currentFuel", {
        get: function () {
            return this._currentFuel;
        },
        set: function (value) {
            this._currentFuel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "mileage", {
        get: function () {
            return this._mileage;
        },
        set: function (value) {
            this._mileage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuelFor1KM", {
        get: function () {
            return this._fuelFor1KM;
        },
        set: function (value) {
            this.fuelFor1KM = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "vehicleType", {
        get: function () {
            return this._vehicleType;
        },
        set: function (value) {
            this._vehicleType = value;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.getInfo = function () {
        console.log("\n        name: ".concat(this.brandName, ",\n        model: ").concat(this.modelName, ",\n        year: ").concat(this.year, ",\n        engine: ").concat(EngineType[this.engine], ",\n        "));
    };
    Car.prototype.drive = function (km) {
        var usedFuel = km * this.fuelFor1KM;
        this.mileage += km;
        this.currentFuel -= usedFuel;
        return this.currentFuel;
    };
    return Car;
}());
var Motorcycle = /** @class */ (function () {
    function Motorcycle(brandName, modelName, year, fuelCapacity, currentFuel, mileage, fuelFor1KM, engine, vehicleType) {
        this.brandName = brandName;
        this._modelName = modelName;
        this._year = year;
        this._fuelCapacity = fuelCapacity;
        this._currentFuel = currentFuel;
        this._mileage = mileage;
        this._fuelFor1KM = fuelFor1KM;
        this._engine = engine;
        this._vehicleType = VehicleType.Motorcycle;
    }
    Object.defineProperty(Motorcycle.prototype, "modelName", {
        get: function () {
            return this._modelName;
        },
        set: function (value) {
            this._modelName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "year", {
        get: function () {
            return this.year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "fuelCapacity", {
        get: function () {
            return this._fuelCapacity;
        },
        set: function (value) {
            this._fuelCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "currentFuel", {
        get: function () {
            return this._currentFuel;
        },
        set: function (value) {
            this._currentFuel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "mileage", {
        get: function () {
            return this._mileage;
        },
        set: function (value) {
            this._mileage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "fuelFor1KM", {
        get: function () {
            return this._fuelFor1KM;
        },
        set: function (value) {
            this.fuelFor1KM = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "vehicleType", {
        get: function () {
            return this._vehicleType;
        },
        set: function (value) {
            this._vehicleType = value;
        },
        enumerable: false,
        configurable: true
    });
    Motorcycle.prototype.getInfo = function () {
        console.log("\n        name: ".concat(this.brandName, ",\n        model: ").concat(this.modelName, ",\n        year: ").concat(this.year, ",\n        engine: ").concat(EngineType[this.engine], ",\n        "));
    };
    Motorcycle.prototype.drive = function (km) {
        var usedFuel = km * this.fuelFor1KM;
        this.mileage += km;
        this.currentFuel -= usedFuel;
        return this.currentFuel;
    };
    Motorcycle.prototype.startEngine = function () {
        console.log("".concat(this.brandName, " ").concat(this.modelName, "'s engine is now running"));
    };
    return Motorcycle;
}());
var porscheCar = new Car("Porsche", "GTR3 RS 911", 2023, 70, 60, 0, 8, EngineType.TURBO, VehicleType.Car);
var bmwMotorcycle = new Motorcycle("BMW", "S1000RR", 2023, 32, 28, 0, 15, EngineType.TURBO, VehicleType.Car);
var carHeading = document.querySelector("#car-heading");
if (carHeading) {
    carHeading.textContent = "".concat(porscheCar.brandName);
}
var motorcycleHeading = document.querySelector("#moto-heading");
if (motorcycleHeading) {
    motorcycleHeading.textContent = "".concat(bmwMotorcycle.brandName);
}
