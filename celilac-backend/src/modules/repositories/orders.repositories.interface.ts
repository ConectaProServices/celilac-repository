export const ORDER_REPOSITORY = 'ORDER_REPOSITORY';

export interface IOrdersRepository {
    findOrderById(orderId: string): Promise<any | null>;
}