import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateUser1612065701299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
            ],
        }), true);

        await queryRunner.createIndex('users', new TableIndex({
            name: 'IDX_USERS_EMAIL',
            columnNames: ['email'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('users', 'IDX_USERS_EMAIL');
        await queryRunner.dropTable('users');
    }

}
