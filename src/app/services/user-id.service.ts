import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class UserIdService {
  private _storage: Storage | null = null;

  constructor(public storage: Storage) {}

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;

    const userId = Math.random().toString(36).slice(2, 9);
    const getCurrentTime = new Date();
    const getExpiration = await this.storage.get('expire');

    if (!getExpiration || getCurrentTime > getExpiration) {
      const expire = new Date();
      expire.setHours(getCurrentTime.getHours() + 1);
      this.storage.set('expire', expire);
    } else {
      console.log('Expire datealready assigned.');
    }

    if (!getId || getCurrentTime > getExpiration) {
      this.storage.set('id', userId);
    } else {
      console.log('ID already assigned.');
    }
  }
}
