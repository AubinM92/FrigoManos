import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicefrigoService {

  elemservice;
  url = 'http://51.254.112.59:8080/beaufrigovf/'
  uco = localStorage.getItem("pseudo");
  constructor() { }
}
