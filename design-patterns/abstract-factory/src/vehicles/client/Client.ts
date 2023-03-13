import IAircraft from "../aerial/interfaces/IAircraft";
import TransportFactory from "../factories/interfaces/ITransportFactory";
import LandVehicle from "../land/interfaces/ILandVehicle";

export default class Client {

    private vehicle: LandVehicle;
    private aircraft: IAircraft;

    constructor(factory: TransportFactory) {
        
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();

    }

    startRoute():void {

        this.vehicle.startRoute();
        this.aircraft.startRoute();

    }

}