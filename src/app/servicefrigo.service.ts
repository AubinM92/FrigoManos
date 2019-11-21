import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicefrigoService {

  elemservice;

  uco = localStorage.getItem("pseudo");
  constructor() { }
}
