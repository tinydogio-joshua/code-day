import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateProject1612065634413 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'projects',
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

        await queryRunner.createIndex('projects', new TableIndex({
            name: 'IDX_PROJECTS_NAME',
            columnNames: ['name'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('projects', 'IDX_PROJECTS_NAME');
        await queryRunner.dropTable('projects');
    }

}
