import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddProjectDefaults1612198286913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
            .changeColumn(
                'projects',
                'name',
                new TableColumn({
                    name: 'name',
                    default: '"New Project"', // Extra quotes due to bug.
                    type: 'varchar'
                })
            );

        await queryRunner
            .changeColumn(
                'projects',
                'created_at',
                new TableColumn({
                    name: 'created_at',
                    default: 'CURRENT_TIMESTAMP',
                    type: 'timestamp'
                })
            );

        await queryRunner
            .changeColumn(
                'projects',
                'updated_at',
                new TableColumn({
                    name: 'updated_at',
                    default: 'CURRENT_TIMESTAMP',
                    type: 'timestamp'
                })
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner
            .changeColumn(
                'projects',
                'updated_at',
                new TableColumn({
                    name: 'updated_at',
                    default: 'now()',
                    type: 'timestamp'
                })
            );

        await queryRunner
            .changeColumn(
                'projects',
                'created_at',
                new TableColumn({
                    name: 'created_at',
                    default: 'now()',
                    type: 'timestamp'
                })
            );

        await queryRunner
            .changeColumn(
                'projects',
                'name',
                new TableColumn({
                    name: 'name',
                    type: 'varchar'
                })
            );
    }

}
