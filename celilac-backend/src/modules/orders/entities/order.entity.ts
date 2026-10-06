import { OrderStatus } from "../../../common/enum/order-status.enum.js";
import { PaymentStatus } from "../../../common/enum/payment-status.enum.js";
import { OrderAlreadyConfirmedException } from "../../../common/exeptions/order-alread-confirmed.exception.js";

export class Order {
    private status: OrderStatus;

    constructor (
        public readonly orderId: string,
        public readonly costumerId: string,
        status: OrderStatus,
        public amount: number,
        public paidAt: Date,
        public readonly createdAt: Date = new Date(),
        public readonly updatedAt: Date = new Date(),
        public readonly deletedAt: Date | null = null,
    ) {
        this.status = status?? OrderStatus.PENDING;
    }
    public getStatus(): OrderStatus {
        return this.status;
    }

    confirmOrder(): void {
        if (this.status !== OrderStatus.CONFIRMED) {
            throw new OrderAlreadyConfirmedException();
        }
        this.status = OrderStatus.CONFIRMED;
    }

}