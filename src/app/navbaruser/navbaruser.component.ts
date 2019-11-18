import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  deconnexion(){
    localStorage.clear();
    this.router.navigate(['/home'])
  }


}
