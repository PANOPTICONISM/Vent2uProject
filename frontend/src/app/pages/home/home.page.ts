import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { UserIdService } from 'src/app/services/userId.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  rooms: any = [];
  takenZones: any = [];
  roomZones: any = [];
  assignedLocation = '';
  constructor(private crudService: CrudService, public userId: UserIdService) {}

  ngOnInit() {
    this.crudService.getRooms().subscribe((res) => {
      this.rooms = res;
      this.roomZones = Object.values(res).map((room) => room.zone);
    });

    this.crudService.getAllUsedZones().subscribe((res) => {
      this.takenZones = Object.values(res).map((room) => room.zone);
      this.getUniqueLocation();
    });
  }

  getUniqueLocation() {
    const freeZone = this.roomZones.find(
      (roomZone) => !this.takenZones.includes(roomZone)
    );

    if (freeZone >= 1 && freeZone <= 8) {
      this.assignedLocation = `Room D3.05, Zone ${freeZone}`;
    } else {
      this.assignedLocation = `Room D3.06, Zone ${freeZone}`;
    }
  }
}
