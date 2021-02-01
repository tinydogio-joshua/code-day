import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddTimeStamps1612118680289 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn('customers', new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
        }));

        await queryRunner.addColumn('customers', new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
        }));

        await queryRunner.addColumn('projects', new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
        }));

        await queryRunner.addColumn('projects', new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
        }));

        await queryRunner.addColumn('tasks', new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
        }));

        await queryRunner.addColumn('tasks', new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
        }));

        await queryRunner.addColumn('task_logs', new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
        }));

        await queryRunner.addColumn('task_logs', new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
        }));

        await queryRunner.addColumn('users', new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
        }));

        await queryRunner.addColumn('users', new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('users', 'updated_at');
        await queryRunner.dropColumn('users', 'created_at');

        await queryRunner.dropColumn('task_logs', 'updated_at');
        await queryRunner.dropColumn('task_logs', 'created_at');

        await queryRunner.dropColumn('tasks', 'updated_at');
        await queryRunner.dropColumn('tasks', 'created_at');

        await queryRunner.dropColumn('projects', 'updated_at');
        await queryRunner.dropColumn('projects', 'created_at');

        await queryRunner.dropColumn('customers', 'updated_at');
        await queryRunner.dropColumn('customers', 'created_at');

    }

}
