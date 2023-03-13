import IBicycle from './IBicycle';

export default class Bicycle implements IBicycle {

    private color: string;
    private rim: number;
    private hasBasket: boolean;

    constructor(
        color: string,
        rim: number,
        hasBasket: boolean,
    ) {
        this.configureVehicle(color, rim, hasBasket);
    }

    configureVehicle(color: string, rim: number, hasBasket: boolean): void {
        
        this.color = color;
        this.rim = rim;
        this.hasBasket = hasBasket;

        this.startVehicle();

    }

    startVehicle(): void {

        console.log(`Bicicleta da cor ${this.color}, aro ${this.rim}${this.hasBasket ? ', com cestinho.' : '.'}`);

    }

}
