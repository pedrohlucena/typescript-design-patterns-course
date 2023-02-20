import IPlatform from "./IPlatform";

export default class Instagram implements IPlatform {

    constructor() {
        this.configureRMTP();
        console.log("Instagram: Transmissão Iniciada");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Instagram: Conta autorizada");
    }

    authToken(): void {
        console.log("Instagram: Autorizando aplicação");
    }    

}
