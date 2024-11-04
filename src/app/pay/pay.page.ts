import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { constants } from '../share/constants';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {

  total: number = 20;
  totalTemp: number = 0;
  isVisibleList: boolean = false;
  constructor(private router: Router,private storage: StorageService) { }
  ngOnInit(): void {
     this.storage.get(constants.total).then((val) => {
        if(val!=null){
          this.total = val;
        }
     });
  }

  open() {
    if (this.isVisibleList) {
      this.isVisibleList = false;
    } else {
      this.isVisibleList = true;
    }
  }

  save(){
    this.storage.set(constants.total, this.totalTemp);
    this.total = this.totalTemp;
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

