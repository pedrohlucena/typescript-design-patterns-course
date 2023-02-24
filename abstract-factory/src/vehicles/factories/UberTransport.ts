import Airplane from "../aerial/Airplane";
import Aircraft from "../aerial/interfaces/IAircraft";
import Car from "../land/Car";
import LandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransportFactory {

    createTransportVehicle(): LandVehicle {
        return new Car();
    }
    createTransportAircraft(): Aircraft {
        return new Airplane();
    }

}