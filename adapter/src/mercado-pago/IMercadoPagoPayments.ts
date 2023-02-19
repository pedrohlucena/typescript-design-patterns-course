import Token from "../utils/Token";

export default interface IMercadoPagoPayments {
    authToken(): Token;
    enviarPagamento(): void;
    receberPagamento(): void;
}