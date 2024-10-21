import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tecnology',
  templateUrl: './tecnology.page.html',
  styleUrls: ['./tecnology.page.scss'],
})
export class TecnologyPage implements OnInit {

  total: number = 20;
  isVisibleList: boolean = false;
  constructor(private router: Router) { }
  ngOnInit(): void {
    
  }

  open() {
    if (this.isVisibleList) {
      this.isVisibleList = false;
    } else {
      this.isVisibleList = true;
    }
  }

  navegarA(id: number) {
    switch (id) {
      case 1:
        this.router.navigate(['/ships']);
        break;
      case 2:
        this.router.navigate(['/tecnology']);
        break;
      case 3:
        this.router.navigate(['/colony']);
        break;
      case 4:
        this.router.navigate(['/pay']);
        break;
      case 5:
        this.router.navigate(['/main']);
        break;  
      default:
        break;
    }
  }

}

