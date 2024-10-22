import { disableDebugTools } from "@angular/platform-browser";
import { Ship } from "./Ship";

export class constants {
    public static readonly game = 'game';
    public static readonly total = 'total';
    public static readonly dbName = 'appDb';
    public static readonly NavesGrandes ='NavesGrandes'
    public static readonly Ataque = 'Ataque'
    public static readonly Defensa = 'Defensa'
    public static readonly Tactica = 'Tactica'
    public static readonly Movimiento = 'Movimiento'
    public static readonly Terraformación = 'Terraformación'
    public static readonly Exploración = 'Exploración'
    public static readonly Astilleros = 'Astilleros'
    public static readonly PuntoDeDefensa = 'PuntoDeDefensa'
    public static readonly Cazas = 'Cazas'
    public static readonly Ocultación = 'Ocultación'
    public static readonly Detección = 'Detección'
    public static readonly Minas = 'Minas'
    public static readonly Dragaminas = 'Dragaminas'
    public static readonly Flota = 'Flota'

}

export const shipList: Array<Ship> = [
    { Id: 1, Code: 'SC', Name: 'Scout', Cost: 6, HullSize: 1 },
    { Id: 2, Code: 'DD', Name: 'Destroyer', Cost: 9, HullSize: 1 },
    { Id: 3, Code: 'CA', Name: 'Cruiser', Cost: 12, HullSize: 2 },
    { Id: 4, Code: 'BC', Name: 'Battlecruiser', Cost: 15, HullSize: 2 },
    { Id: 5, Code: 'BB', Name: 'Battleship', Cost: 20, HullSize: 3 },
    { Id: 6, Code: 'DN', Name: 'Dreadnought', Cost: 24, HullSize: 3 },
    { Id: 7, Code: 'Colony', Name: 'Colony', Cost: 8, HullSize: 0 },
    { Id: 8, Code: 'Base', Name: 'Base', Cost: 12, HullSize: 3 },
    { Id: 9, Code: 'Miner', Name: 'Miner', Cost: 5, HullSize: 0 },
    { Id: 10, Code: 'Decoy', Name: 'Decoy', Cost: 1, HullSize: 0 },
    { Id: 11, Code: 'Shipyard', Name: 'Shipyard', Cost: 6, HullSize: 1 },
    { Id: 12, Code: 'Raider', Name: 'Raider', Cost: 2, HullSize: 12 },
    { Id: 13, Code: 'CV', Name: 'CV', Cost: 12, HullSize: 1 },
    { Id: 14, Code: 'Fighter', Name: 'Fighter', Cost: 5, HullSize: 1 },
    { Id: 15, Code: 'Pipeline', Name: 'Pipeline', Cost: 3, HullSize: 0 },
    { Id: 16, Code: 'Mines', Name: 'Mines', Cost: 5, HullSize: 0 },
    { Id: 17, Code: 'Sweeper', Name: 'Sweeper', Cost: 6, HullSize: 1 }
];
