import { PaymentStatus } from "../../../common/enum/payment-status.enum.js";

export class Payment {
    private status: PaymentStatus;
    
    constructor(
        public readonly paymentId: string,
        public readonly orderId: string,
        status: PaymentStatus
    ) {
        this.status = status;
    }
}
