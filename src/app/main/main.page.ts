import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { constants, flota } from '../share/constants';
import { find } from 'rxjs';
import { tick } from '@angular/core/testing';


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
  results = [];
  flota = [];


  constructor(private router: Router,private storage: StorageService) { }
  ngOnInit(): void {
    
  }

  ionViewWillEnter(){
    
    this.CargarDatos();

  }

  newGame(){
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

  async inicioPartida(){
    await this.storage.set(constants.NavesGrandes,1 );
     this.NavesGrandes = 1;
    await this.storage.set(constants.Ataque,0 );
    await this.storage.set(constants.Defensa,0 );
    await this.storage.set(constants.Tactica,0 );
    await this.storage.set(constants.Movimiento,1 );
     this.Movimiento = 1;
    await this.storage.set(constants.Terraformación,0 );
    await this.storage.set(constants.Exploración,0 );
    await this.storage.set(constants.Astilleros,1 );
     this.Astilleros = 1;
    await this.storage.set(constants.PuntoDeDefensa,0 );
    await this.storage.set(constants.Cazas,0 );
    await this.storage.set(constants.Ocultación,0 );
    await this.storage.set(constants.Detección,0 );
    await this.storage.set(constants.Minas,0 );
    await this.storage.set(constants.Dragaminas,0 );
    
    this.flota = flota;
    this.results = this.flota;
    await this.storage.set(constants.Flota,this.flota );
  }

  async up(nave:any){
    this.flota.find(x => x.type == nave.type).cantidad += 1;
    await this.storage.set(constants.Flota,this.flota );
   
  }
  async down(nave:any){
    this.flota.find(x => x.type == nave.type).cantidad -= 1;
    if(this.flota.find(x => x.type == nave.type).cantidad <= 0){
      this.flota.find(x => x.type == nave.type).cantidad = 1;
      this.flota.find(x => x.type == nave.type).activo = false;
      await this.storage.set(constants.Flota,this.flota );
    }
  }

  async eliminiarNave(nave:any){
    this.flota.find(x => x.type == nave.type).cantidad = 1;
    this.flota.find(x => x.type == nave.type).activo = false;
    await this.storage.set(constants.Flota,this.flota );
  }

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.flota.filter((d) => d.type.toLowerCase().indexOf(query) > -1);
  }

  async reinicia(){
    await this.storage.clear();
    this.router.navigateByUrl('/main', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
    await this.inicioPartida();
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
 