import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicefrigoService {

  elemservice;
  url = 'http://localhost:8087/'
  uco = localStorage.getItem("pseudo");
  constructor() { }
}
