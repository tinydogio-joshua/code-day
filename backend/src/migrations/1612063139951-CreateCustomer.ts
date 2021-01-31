import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateCustomer1612063139951 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'customers',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
            ],
        }), true);

        await queryRunner.createIndex('customers', new TableIndex({
            name: 'IDX_CUSTOMERS_NAME',
            columnNames: ['name'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('customers', 'IDX_CUSTOMERS_NAME');
        await queryRunner.dropTable('customers');
    }
}
