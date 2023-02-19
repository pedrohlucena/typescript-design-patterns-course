import MercadoPago from "../mercado-pago/MercadoPago";
import IPayPalPayments from "../paypal/IPayPalPayments";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayments {
    constructor(private mercadoPago: MercadoPago) {
        console.log("Adaptando o Mercado Pago utilizando os métodos padrões do PayPal.");
    }

    authToken(): Token {
        return this.mercadoPago.authToken();
    }

    paypalPayment(): void {
        return this.mercadoPago.enviarPagamento();
    }
    paypalReceive(): void {
        return this.mercadoPago.receberPagamento();
    }
}