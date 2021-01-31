import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateTask1612065657601 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tasks',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'description',
                    type: 'text'
                },
            ],
        }), true);

        await queryRunner.createIndex('tasks', new TableIndex({
            name: 'IDX_TASKS_TITLE',
            columnNames: ['title'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('tasks', 'IDX_TASKS_TITLE');
        await queryRunner.dropTable('tasks');
    }

}
