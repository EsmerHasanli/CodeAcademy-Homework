enum VehicleType {
  Car,
  Motorcycle,
}

enum EngineType {
  DOHC,
  SOHC,
  TURBO,
}

interface IVehicle<T> {
  brandName: string;
  modelName: string;
  year: number;
  fuelCapacity: number;
  currentFuel: T;
  mileage: number;
  fuelFor1KM: number;
  engine: EngineType;
  vehicleType: VehicleType;
  getInfo: () => void;
  drive: (km: number) => T;
}

class Car implements IVehicle<number> {
  brandName: string;
  private _modelName: string;
  private _year: number;
  private _fuelCapacity: number;
  private _currentFuel: number;
  private _mileage: number;
  private _fuelFor1KM: number;
  private _engine: EngineType;
  private _vehicleType: VehicleType;

  constructor(
    brandName: string,
    modelName: string,
    year: number,
    fuelCapacity: number,
    currentFuel: number,
    mileage: number,
    fuelFor1KM: number,
    engine: EngineType,
    vehicleType: VehicleType
  ) {
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

  get modelName(): string {
    return this._modelName;
  }

  get year(): number {
    return this.year;
  }

  get fuelCapacity(): number {
    return this._fuelCapacity;
  }

  get currentFuel(): number {
    return this._currentFuel;
  }

  get mileage(): number {
    return this._mileage;
  }

  get fuelFor1KM(): number {
    return this._fuelFor1KM;
  }

  get engine(): EngineType {
    return this._engine;
  }

  get vehicleType(): VehicleType {
    return this._vehicleType;
  }

  set modelName(value: string) {
    this._modelName = value;
  }

  set year(value: number) {
    this._year = value;
  }

  set fuelCapacity(value: number) {
    this._fuelCapacity = value;
  }

  set currentFuel(value: number) {
    this._currentFuel = value;
  }

  set mileage(value: number) {
    this._mileage = value;
  }

  set fuelFor1KM(value: number) {
    this.fuelFor1KM = value;
  }

  set engine(value: EngineType) {
    this._engine = value;
  }

  set vehicleType(value: VehicleType) {
    this._vehicleType = value;
  }

  getInfo(): void {
    console.log(`
        name: ${this.brandName},
        model: ${this.modelName},
        year: ${this.year},
        engine: ${EngineType[this.engine]},
        `);
  }

  drive(km: number): number {
    const usedFuel = km * this.fuelFor1KM;
    this.mileage += km;
    this.currentFuel -= usedFuel;
    return this.currentFuel;
  }
}

class Motorcycle implements IVehicle<number> {
  brandName: string;
  private _modelName: string;
  private _year: number;
  private _fuelCapacity: number;
  private _currentFuel: number;
  private _mileage: number;
  private _fuelFor1KM: number;
  private _engine: EngineType;
  private _vehicleType: VehicleType;

  constructor(
    brandName: string,
    modelName: string,
    year: number,
    fuelCapacity: number,
    currentFuel: number,
    mileage: number,
    fuelFor1KM: number,
    engine: EngineType,
    vehicleType: VehicleType
  ) {
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

  get modelName(): string {
    return this._modelName;
  }

  get year(): number {
    return this.year;
  }

  get fuelCapacity(): number {
    return this._fuelCapacity;
  }

  get currentFuel(): number {
    return this._currentFuel;
  }

  get mileage(): number {
    return this._mileage;
  }

  get fuelFor1KM(): number {
    return this._fuelFor1KM;
  }

  get engine(): EngineType {
    return this._engine;
  }

  get vehicleType(): VehicleType {
    return this._vehicleType;
  }

  set modelName(value: string) {
    this._modelName = value;
  }

  set year(value: number) {
    this._year = value;
  }

  set fuelCapacity(value: number) {
    this._fuelCapacity = value;
  }

  set currentFuel(value: number) {
    this._currentFuel = value;
  }

  set mileage(value: number) {
    this._mileage = value;
  }

  set fuelFor1KM(value: number) {
    this.fuelFor1KM = value;
  }

  set engine(value: EngineType) {
    this._engine = value;
  }

  set vehicleType(value: VehicleType) {
    this._vehicleType = value;
  }

  getInfo(): void {
    console.log(`
        name: ${this.brandName},
        model: ${this.modelName},
        year: ${this.year},
        engine: ${EngineType[this.engine]},
        `);
  }

  drive(km: number): number {
    const usedFuel = km * this.fuelFor1KM;
    this.mileage += km;
    this.currentFuel -= usedFuel;
    return this.currentFuel;
  }

  startEngine(): void {
    console.log(`${this.brandName} ${this.modelName}'s engine is now running`);
  }
}

const porscheCar = new Car(
  "Porsche",
  "GTR3 RS 911",
  2023,
  70,
  60,
  0,
  8,
  EngineType.TURBO,
  VehicleType.Car
);

const bmwMotorcycle = new Motorcycle(
  "BMW",
  "S1000RR",
  2023,
  32,
  28,
  0,
  15,
  EngineType.TURBO,
  VehicleType.Car
);

const carHeading = document.querySelector("#car-heading");
if (carHeading) {
  carHeading.textContent = `${porscheCar.brandName}`;
}

const motorcycleHeading = document.querySelector("#moto-heading");
if (motorcycleHeading) {
  motorcycleHeading.textContent = `${bmwMotorcycle.brandName}`;
}