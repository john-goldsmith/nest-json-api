import { MigrationInterface, QueryRunner/*, Table, TableColumn*/ } from 'typeorm';

export class UserRenameLastName1597788346150 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Manual
    // await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "lastName" TO "surname"`);

    // Programmatic
    // const table = new Table({name: 'user'});
    // const oldColumnName = new TableColumn({type: 'string', name: 'firstName', });
    // const newColumnName = new TableColumn({type: 'string', name: 'surname'});
    // await queryRunner.renameColumn(table, oldColumnName, newColumnName);

    // Simple
    await queryRunner.renameColumn('user', 'lastName', 'surname');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Manual
    // await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "surname" TO "lastName"`);

    // Programmatic
    // const table = new Table({name: 'user'});
    // const oldColumnName = new TableColumn({type: 'string', name: 'surname', });
    // const newColumnName = new TableColumn({type: 'string', name: 'firstName'});
    // await queryRunner.renameColumn(table, oldColumnName, newColumnName);

    // Simple
    await queryRunner.renameColumn('user', 'surname', 'lastName');
  }

}
