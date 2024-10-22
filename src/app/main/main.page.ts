import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { constants } from '../share/constants';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  

  total: number = 20;
  isVisibleList: boolean = false;
  NavesGrandes:number = 0;
  Ataque:number = 0;
  Defensa:number = 0;
  Tactica:number = 0;
  Movimiento:number = 0;
  Terraformacion:number = 0;
  Exploracion:number = 0;
  Astilleros:number = 0;
  Punto:number = 0;
  Cazas:number = 0;
  Ocultacion:number = 0;
  Deteccion:number = 0;
  Minas:number = 0;
  Dragaminas:number = 0;


  constructor(private router: Router,private storage: StorageService) { }
  ngOnInit(): void {
    this.storage.get('game').then((val) => {
      if(val!=null){
        console.log('game', val);
      }
    })
  }

  ionViewWillEnter(){

    this.inicioPartida();

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

  open() {
    if (this.isVisibleList) {
      this.isVisibleList = false;
    } else {
      this.isVisibleList = true;
    }
  }

  inicioPartida(){
    this.storage.set(constants.NavesGrandes,1 );
    this.NavesGrandes = 1;
    this.storage.set(constants.Ataque,0 );
    this.storage.set(constants.Defensa,0 );
    this.storage.set(constants.Tactica,0 );
    this.storage.set(constants.Movimiento,1 );
    this.Movimiento = 1;
    this.storage.set(constants.Terraformación,0 );
    this.storage.set(constants.Exploración,0 );
    this.storage.set(constants.Astilleros,1 );
    this.Astilleros = 1;
    this.storage.set(constants.PuntoDeDefensa,0 );
    this.storage.set(constants.Cazas,0 );
    this.storage.set(constants.Ocultación,0 );
    this.storage.set(constants.Detección,0 );
    this.storage.set(constants.Minas,0 );
    this.storage.set(constants.Dragaminas,0 );
    
    var flota =[     
      {id:1 ,type:'Colony'},
      {id:2 ,type:'Colony'},
      {id:3 ,type:'Colony'},
      {id:4 ,type:'Miner'},
      {id:5 ,type:'SY'},
      {id:6 ,type:'SY'},
      {id:7 ,type:'SY'},
      {id:8 ,type:'SY'},
      {id:9 ,type:'SC #1',Ataque:0,Defensa:0,Tactica:0,Movimiento:1,PuntoDeDefensa:0},
      {id:10 ,type:'SC #2',Ataque:0,Defensa:0,Tactica:0,Movimiento:1,PuntoDeDefensa:0},
      {id:11 ,type:'SC #3',Ataque:0,Defensa:0,Tactica:0,Movimiento:1,PuntoDeDefensa:0}
    ]

    this.storage.set(constants.Flota,flota );
  }
}
