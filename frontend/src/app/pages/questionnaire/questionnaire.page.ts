import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {
  private _storage: Storage | null = null;
  constructor(private storage: Storage) {}

  async ngOnInit() {
    const storage = await this.storage.create();
    this._storage = storage;

    const getId = await this.storage.get('id');
    console.log(getId);
  }
}
