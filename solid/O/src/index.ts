import TypeVehicle from "./TypeVehicle";
import Bicycle from "./vehicles/Bicycle";
import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";

const typeVehicle = TypeVehicle.BICYCLE;
let vehicle;

if (typeVehicle === TypeVehicle.BICYCLE) {
    vehicle = new Bicycle("Amarela", 70, false);
} else if (typeVehicle === TypeVehicle.MOTORCYCLE) {
    vehicle = new Motorcycle("Preto", 2022, 250);
} else if (typeVehicle === TypeVehicle.CAR) {
    vehicle = new Car("Amarelo", 2022, 2.0, 4, 4);
} 