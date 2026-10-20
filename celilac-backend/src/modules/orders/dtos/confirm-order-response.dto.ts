import { OrderStatus } from "../../common/enum/order-status.enum.js";

export class ConfirmOrderResponseDto{
    public readonly orderId: string;
    public readonly status: OrderStatus;
    public readonly updateAt: Date;
    public readonly message: string;
}