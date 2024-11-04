import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { constants } from '../share/constants';


@Component({
  selector: 'app-ships',
  templateUrl: './ships.page.html',
  styleUrls: ['./ships.page.scss'],
})
export class ShipsPage implements OnInit {

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
  results = [];
  flota = [];

  constructor(private router: Router, private storage: StorageService) {

  }

  ionViewWillEnter(){
    
    this.CargarDatos();

  }


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

  CargarDatos(){
    this.storage.get('game').then((val) => {
      if(val!=null){
        console.log('game', val);
      }
    })
    this.storage.get(constants.total).then((val) => {
      if(val!=null){
        this.total = val;
      }
    });
    this.storage.get(constants.NavesGrandes).then((val) => {
      if(val!=null){
        this.NavesGrandes = val;
      }
    });
    this.storage.get(constants.Ataque).then((val) => {
      if(val!=null){
        this.Ataque = val;
      }
    });
    this.storage.get(constants.Defensa).then((val) => {
      if(val!=null){
        this.Defensa = val;
      }
    });
    this.storage.get(constants.Tactica).then((val) => {
      if(val!=null){
        this.Tactica = val;
      }
    });
    this.storage.get(constants.Movimiento).then((val) => {
      if(val!=null){
        this.Movimiento = val;
      }
    });
    this.storage.get(constants.Terraformación).then((val) => {
      if(val!=null){
        this.Terraformacion = val;
      }
    });
    this.storage.get(constants.Exploración).then((val) => {
      if(val!=null){
        this.Exploracion = val;
      }
    });
    this.storage.get(constants.Astilleros).then((val) => {
      if(val!=null){
        this.Astilleros = val;
      }
    });
    this.storage.get(constants.PuntoDeDefensa).then((val) => {
      if(val!=null){
        this.Punto = val;
      }
    });
    this.storage.get(constants.Cazas).then((val) => {
      if(val!=null){
        this.Cazas = val;
      }
    });
    this.storage.get(constants.Ocultación).then((val) => {
      if(val!=null){
        this.Ocultacion = val;
      }
    });
    this.storage.get(constants.Detección).then((val) => {
      if(val!=null){
        this.Deteccion = val;
      }
    });
    this.storage.get(constants.Minas).then((val) => {
      if(val!=null){
        this.Minas = val;
      }
    });
    this.storage.get(constants.Dragaminas).then((val) => {
      if(val!=null){
        this.Dragaminas = val;
      }
    });
    this.storage.get(constants.Flota).then((val) => {
      if(val!=null){
        this.flota = val;
        this.results = this.flota;
      }
    });
    
  }

}
