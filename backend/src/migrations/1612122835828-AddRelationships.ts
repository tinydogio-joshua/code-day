import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddRelationships1612122835828 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn('projects', new TableColumn({
            name: 'customer_id',
            type: 'int'
        }));

        await queryRunner.addColumn('users', new TableColumn({
            name: 'customer_id',
            type: 'int'
        }));

        await queryRunner.addColumn('tasks', new TableColumn({
            name: 'project_id',
            type: 'int'
        }));

        await queryRunner.addColumn('task_logs', new TableColumn({
            name: 'task_id',
            type: 'int'
        }));

        await queryRunner.addColumn('task_logs', new TableColumn({
            name: 'user_id',
            type: 'int'
        }));

        await queryRunner.createForeignKey('projects', new TableForeignKey({
            columnNames: ['customer_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'customers',
        }));

        await queryRunner.createForeignKey('users', new TableForeignKey({
            columnNames: ['customer_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'customers',
        }));

        await queryRunner.createForeignKey('tasks', new TableForeignKey({
            columnNames: ['project_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'projects',
        }));

        await queryRunner.createForeignKey('task_logs', new TableForeignKey({
            columnNames: ['task_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tasks',
        }));

        await queryRunner.createForeignKey('task_logs', new TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        const taskLogsTable1 = await queryRunner.getTable('task_logs');
        const taskLogsTable1FK = taskLogsTable1?.foreignKeys.find(fk => fk.columnNames.indexOf('user_id') !== -1);
        if (taskLogsTable1FK) {
            await queryRunner.dropForeignKey('task_logs', taskLogsTable1FK);
        }

        const taskLogsTable2 = await queryRunner.getTable('task_logs');
        const taskLogsTable2FK = taskLogsTable2?.foreignKeys.find(fk => fk.columnNames.indexOf('task_id') !== -1);
        if (taskLogsTable2FK) {
            await queryRunner.dropForeignKey('task_logs', taskLogsTable2FK);
        }

        const tasksTable = await queryRunner.getTable('tasks');
        const tasksTableFK = tasksTable?.foreignKeys.find(fk => fk.columnNames.indexOf('project_id') !== -1);
        if (tasksTableFK) {
            await queryRunner.dropForeignKey('tasks', tasksTableFK);
        }

        const usersTable = await queryRunner.getTable('users');
        const usersTableFK = usersTable?.foreignKeys.find(fk => fk.columnNames.indexOf('customer_id') !== -1);
        if (usersTableFK) {
            await queryRunner.dropForeignKey('users', usersTableFK);
        }

        const projectsTable = await queryRunner.getTable('projects');
        const projectsTableFK = projectsTable?.foreignKeys.find(fk => fk.columnNames.indexOf('customer_id') !== -1);
        if (projectsTableFK) {
            await queryRunner.dropForeignKey('projects', projectsTableFK);
        }

        await queryRunner.dropColumn('task_logs', 'user_id');
        await queryRunner.dropColumn('task_logs', 'task_id');
        await queryRunner.dropColumn('tasks', 'project_id');
        await queryRunner.dropColumn('users', 'customer_id');
        await queryRunner.dropColumn('projects', 'customer_id');

    }

}
