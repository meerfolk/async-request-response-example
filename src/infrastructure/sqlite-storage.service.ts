import { Injectable } from '@nestjs/common';

import * as DB from 'better-sqlite3';

@Injectable()
export class SqliteStorageService {
  private readonly db: DB.Database;

  public constructor() {
    this.db = new DB('tasks.db');

    this.db.exec(`
      CREATE TABLE IF NOT EXISTS tasks(
        id TEXT primary key,
        status TEXT NOT NULL,
        size INT NOT NULL
      );`);
  }

  public async insert(template: string, params: any[]): Promise<void> {
    this.db.prepare(template).run(...params);
  }

  public async get<T>(template: string, params: any[]): Promise<T> {
    const result = this.db.prepare(template).get(...params);

    return result as T;
  }

  public async update(template: string, params: any[]): Promise<void> {
    await this.insert(template, params);
  }

  public async getAll<T>(template: string, params: any[]): Promise<T[]> {
    return this.db.prepare(template).all(...params) as T[];
  }
}
