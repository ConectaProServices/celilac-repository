import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrders1792522352119 implements MigrationInterface {
    name = 'CreateOrders1792522352119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE IF NOT EXISTS SCHEMA "orders"`);
        await queryRunner.query(`CREATE TYPE "orders"."orders_status_enum" AS ENUM('PENDING', 'CONFIRMED', 'CANCELLED')`);
        await queryRunner.query(`CREATE TABLE "orders"."orders" ("orderId" uuid NOT NULL DEFAULT uuid_generate_v4(), "customerId" uuid NOT NULL, "status" "orders"."orders_status_enum" NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_41ba27842ac1a2c24817ca59eaa" PRIMARY KEY ("orderId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "orders"."orders"`);
        await queryRunner.query(`DROP TYPE "orders"."orders_status_enum"`);
    }

}
