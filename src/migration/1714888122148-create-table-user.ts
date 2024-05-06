import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1714888122148 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE user (
            id int NOT NULL AUTO_INCREMENT,
            username varchar(255) NOT NULL,
            PRIMARY KEY (id)
          ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
