import Transport from "./Transport";
import Motorcycle from "./vehicles/Motorcycle";
import IVehicle from "./vehicles/interfaces/IVehicle";
import Bicycle from "./vehicles/Bicycle";

export class BicycleTransport extends Transport {

    protected createTransport(): IVehicle {
        
        return new Bicycle();

    }

}