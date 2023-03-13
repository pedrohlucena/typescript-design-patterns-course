import Client from "./Client";

export default class Notify {

    constructor(private client: Client) {
        
    }

    send(): void {
        console.log(`Enviando email para o email ${this.client.email} ...`)
    }

}