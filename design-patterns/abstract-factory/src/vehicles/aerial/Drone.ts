import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {

    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a decolagem e trajeto...");
    }

    getCargo(): void {
        console.log("Carga acoplada");
    }

    checkWind(): void {
        console.log("Sem ventos, ventos ok!");
    }

}