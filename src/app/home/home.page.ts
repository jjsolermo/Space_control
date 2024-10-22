import { Component } from '@angular/core';
import { SqliteService } from '../services/sqlite.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private  ships = [];
  public listGames = [];
  private idGame = 1;

  constructor(
    private sqlite: SqliteService,private router:Router,private storage: StorageService
  ) {
  }

  // Al entrar, leemos la base de datos
  ionViewWillEnter(){
    // this.read();
    // this.sqlite.getLastIdGame().then( (id: number) => {
    //   this.idGame = id;
    // }
    // ).catch(err => {
    //   console.error(err);
    //   console.error("Error al leer");
    // })
  }

  async carga(ship: string){
    await this.storage.set('game', ship);
    this.router.navigate(['/main']);
  }

  async newGame(){
    this.storage.clear();
    await this.storage.set('game', 'game_' + new Date().getTime());
    this.router.navigate(['/main']);
    //await this.sqlite.createGame(this.idGame + 1, 'game_' + new Date().getTime(), new Date().toDateString());
    
  }

  async loadGame(){

    let partida = await this.storage.get('game');
    if(partida){
      this.router.navigate(['/main']);
    }
    else{
      console.log("No hay partida");
    }
    // await this.sqlite.getAllGames().then( (games: string[]) => {
    //   this.listGames = games;
    // }
    // ).catch(err => {
    //   console.error(err);
    //   console.error("Error al leer");
    // })

  }


  async createShip(){
    await this.sqlite.createShip(1,'SC', 'Scout', 6, 1);
    await this.sqlite.createShip(2,'DD', 'Destroyer', 9, 1);
    await this.sqlite.createShip(3,'CA', 'Cruiser', 12, 2);
    await this.sqlite.createShip(4,'BC', 'Battlecruiser', 15, 2);
    await this.sqlite.createShip(5,'BB', 'Battleship', 20, 3);
    await this.sqlite.createShip(6,'DN', 'Dreadnought', 24, 3);
    await this.sqlite.createShip(7,'Colony', 'Colony', 8, 0);
    await this.sqlite.createShip(8,'Base', 'Base', 12, 3);
    await this.sqlite.createShip(9,'Miner', 'Miner', 5, 0);
    await this.sqlite.createShip(10,'Decoy', 'Decoy', 1, 0);
    await this.sqlite.createShip(11,'Shipyard', 'Shipyard', 6, 1);
    await this.sqlite.createShip(12,'Raider', 'Raider', 2, 12);
    await this.sqlite.createShip(13,'CV', 'CV', 12, 1);
    await this.sqlite.createShip(14,'Fighter', 'Fighter', 5, 1);
    await this.sqlite.createShip(15,'Pipeline', 'Pipeline', 3, 0);
    await this.sqlite.createShip(16,'Mines', 'Mines', 5, 0);
    await this.sqlite.createShip(17,'Sweeper', 'Sweeper', 6, 1);
  }



  read(){
    this.sqlite.getAllShips().then( (languages: string[]) => {
      this.ships = languages;
      if(this.ships.length == 0){
        this.createShip();
      } 
    }).catch(err => {
      console.error(err);
      console.error("Error al leer");
    })
  }
  
//   update(language: string){
//     // Actualizamos el elemento (language) por el nuevo elemento (this.language)
//     this.sqlite.update(this.language.toUpperCase(), language).then( (changes) => {
//       console.log(changes);
//       console.log("Actualizado");
//       this.language = '';
//       this.read(); // Volvemos a leer
//     }).catch(err => {
//       console.error(err);
//       console.error("Error al actualizar");
//     })
//   }

//   delete(language: string){
//     // Borramos el elemento
//     this.sqlite.delete(language).then( (changes) => {
//       console.log(changes);
//       console.log("Borrado");
//       this.read(); // Volvemos a leer
//     }).catch(err => {
//       console.error(err);
//       console.error("Error al borrar");
//     })
//   }

// }
}
