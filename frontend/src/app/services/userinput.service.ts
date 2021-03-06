import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiURL = `${environment.server_url}/api/userinputs`;

@Injectable({
  providedIn: 'root',
})
export class UserinputService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getAllUserInputs() {
    return this.httpClient.get(apiURL);
  }

  getSpecificUserinput(id: any) {
    return this.httpClient.get(`${apiURL}/${id}`);
  }

  createUserinput(data: any) {
    return this.httpClient.post(apiURL, data);
  }

  updateUserinput(id: any, data: any) {
    return this.httpClient.put(`${apiURL}/${id}`, data);
  }

  deleteUserinput(id: any) {
    return this.httpClient.delete(`${apiURL}/${id}`);
  }

  getAllUsedZones() {
    return this.httpClient.get(apiURL);
  }
}
