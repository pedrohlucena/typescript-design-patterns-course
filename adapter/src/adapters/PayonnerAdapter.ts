import Payonner from "../payonner/Payonner";
import IPayPalPayments from "../paypal/IPayPalPayments";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPayPalPayments {
    constructor(private payonner: Payonner) {
        console.log("Adaptando o Payonner utilizando os métodos padrões do PayPal.");
    }

    authToken(): Token {
        return this.payonner.authToken();
    }

    paypalPayment(): void {
        return this.payonner.sendPayment();
    }
    paypalReceive(): void {
        return this.payonner.receivePayment();
    }
}