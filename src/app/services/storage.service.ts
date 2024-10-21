import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage?.create();
    this._storage = storage;
  }

  // Set a key/value
  public async set(key: string, value: any): Promise<any> {
    return this._storage?.set(key, value);
  }

  // Get a value
  public async get(key: string): Promise<any> {
    return this._storage?.get(key);
  }

  // Remove a key/value
  public async remove(key: string): Promise<any> {
    return this._storage?.remove(key);
  }

  // Clear all keys
  public async clear(): Promise<void> {
    return this._storage?.clear();
  }

  // Get all keys
  public async keys(): Promise<string[]> {
    return this._storage?.keys() ?? [];
  }

  // Get the number of keys
  public async length(): Promise<number> {
    return this._storage?.length() ?? 0;
  }
}
