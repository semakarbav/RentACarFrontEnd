export interface CreatePaymentRequest{
    rentalId: number;
    paymentDate: Date;
    totalPrice:number;
    promotionCode: string;
}