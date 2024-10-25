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

export const flota  = [
    {type:'Colony 1',cantidad:1,ataque:0,maxAtaque:0,defensa:0,maxDefensa:0,tactica:0,maxTactica:0,movimiento:1,maxMovimiento:1,activo:true},
    {type:'Colony 2',cantidad:1,ataque:0,maxAtaque:0,defensa:0,maxDefensa:0,tactica:0,maxTactica:0,movimiento:1,maxMovimiento:1,activo:true},
    {type:'Colony 3',cantidad:1,ataque:0,maxAtaque:0,defensa:0,maxDefensa:0,tactica:0,maxTactica:0,movimiento:1,maxMovimiento:1,activo:true},
    {type:'Colony 4',cantidad:1,ataque:0,maxAtaque:0,defensa:0,maxDefensa:0,tactica:0,maxTactica:0,movimiento:1,maxMovimiento:1,activo:false},
    {type:'Colony 5',cantidad:1,ataque:0,maxAtaque:0,defensa:0,maxDefensa:0,tactica:0,maxTactica:0,movimiento:1,maxMovimiento:1,activo:false},
    {type:'Miner 1',cantidad:1,ataque:0,maxAtaque:0,defensa:0,maxDefensa:0,tactica:0,maxTactica:0,movimiento:1,maxMovimiento:1,activo:true},
    {type:'Miner 2',cantidad:1,ataque:0,maxAtaque:0,defensa:0,maxDefensa:0,tactica:0,maxTactica:0,movimiento:1,maxMovimiento:1,activo:false},
    {type:'SC #1',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,puntoDeDefensa:0,maxEspecial:3,activo:true},
    {type:'SC #2',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,puntoDeDefensa:0,maxEspecial:3,activo:true},
    {type:'SC #3',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,puntoDeDefensa:0,maxEspecial:3,activo:true},
    {type:'SC #4',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,puntoDeDefensa:0,maxEspecial:3,activo:false},
    {type:'SC #5',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,puntoDeDefensa:0,maxEspecial:3,activo:false},
    {type:'DD #1',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,deteccion:0,maxEspecial:2,activo:false},
    {type:'DD #2',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,deteccion:0,maxEspecial:2,activo:false},
    {type:'DD #3',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,deteccion:0,maxEspecial:2,activo:false},
    {type:'DD #4',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,deteccion:0,maxEspecial:2,activo:false},
    {type:'CA #1',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:2,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,exploracion:0,maxEspecial:2,activo:false},
    {type:'CA #2',cantidad:1,ataque:0,maxAtaque:2,defensa:0,maxDefensa:2,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,exploracion:0,maxEspecial:2,activo:false},
    {type:'CA #3',cantidad:1,ataque:0,maxAtaque:2,defensa:0,maxDefensa:2,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,exploracion:0,maxEspecial:2,activo:false},
    {type:'CA #4',cantidad:1,ataque:0,maxAtaque:2,defensa:0,maxDefensa:2,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,exploracion:0,maxEspecial:2,activo:false},
    {type:'BC #1',cantidad:1,ataque:0,maxAtaque:2,defensa:0,maxDefensa:2,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'BC #2',cantidad:1,ataque:0,maxAtaque:2,defensa:0,maxDefensa:2,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'BC #3',cantidad:1,ataque:0,maxAtaque:2,defensa:0,maxDefensa:2,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'BC #4',cantidad:1,ataque:0,maxAtaque:2,defensa:0,maxDefensa:2,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'BB #1',cantidad:1,ataque:0,maxAtaque:3,defensa:0,maxDefensa:3,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'BB #2',cantidad:1,ataque:0,maxAtaque:3,defensa:0,maxDefensa:3,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'BB #3',cantidad:1,ataque:0,maxAtaque:3,defensa:0,maxDefensa:3,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'BB #4',cantidad:1,ataque:0,maxAtaque:3,defensa:0,maxDefensa:3,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'DN #1',cantidad:1,ataque:0,maxAtaque:3,defensa:0,maxDefensa:3,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'DN #2',cantidad:1,ataque:0,maxAtaque:3,defensa:0,maxDefensa:3,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'Fighter #1',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:0,maxMovimiento:0,cazas:1,maxEspecial:2,activo:false},
    {type:'Fighter #2',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:0,maxMovimiento:0,cazas:1,maxEspecial:2,activo:false},
    {type:'Fighter #3',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:0,maxMovimiento:0,cazas:1,maxEspecial:2,activo:false},
    {type:'Fighter #4',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:0,maxMovimiento:0,cazas:1,maxEspecial:2,activo:false},
    {type:'Fighter #5',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:0,maxMovimiento:0,cazas:1,maxEspecial:2,activo:false},
    {type:'Fighter #6',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:0,maxMovimiento:0,cazas:1,maxEspecial:2,activo:false},
    {type:'Fighter #7',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:0,maxMovimiento:0,cazas:1,maxEspecial:2,activo:false},
    {type:'Fighter #8',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:0,maxMovimiento:0,cazas:1,maxEspecial:2,activo:false},
    {type:'CV #1',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'CV #2',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'CV #3',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'CV #4',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,activo:false},
    {type:'Raider #1',cantidad:1,ataque:0,maxAtaque:2,defensa:0,maxDefensa:2,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,ocultacion:1,maxEspecial:2,activo:false},
    {type:'Raider #2',cantidad:1,ataque:0,maxAtaque:2,defensa:0,maxDefensa:2,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,ocultacion:1,maxEspecial:2,activo:false},
    {type:'Raider #3',cantidad:1,ataque:0,maxAtaque:2,defensa:0,maxDefensa:2,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,ocultacion:1,maxEspecial:2,activo:false},
    {type:'Raider #4',cantidad:1,ataque:0,maxAtaque:2,defensa:0,maxDefensa:2,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,ocultacion:1,maxEspecial:2,activo:false},
    {type:'SW #1',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,dragaminas:1,maxEspecial:2,activo:false},
    {type:'SW #2',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,dragaminas:1,maxEspecial:2,activo:false},
    {type:'SW #3',cantidad:1,ataque:0,maxAtaque:1,defensa:0,maxDefensa:1,tactica:0,maxTactica:3,movimiento:1,maxMovimiento:6,dragaminas:1,maxEspecial:2,activo:false},
    {type:'SY',cantidad:1,ataque:0,maxAtaque:0,defensa:0,maxDefensa:0,tactica:0,maxTactica:0,movimiento:0,maxMovimiento:0,activo:true},
    {type:'SY',cantidad:1,ataque:0,maxAtaque:0,defensa:0,maxDefensa:0,tactica:0,maxTactica:0,movimiento:0,maxMovimiento:0,activo:true},
    {type:'SY',cantidad:1,ataque:0,maxAtaque:0,defensa:0,maxDefensa:0,tactica:0,maxTactica:0,movimiento:0,maxMovimiento:0,activo:true},
    {type:'SY',cantidad:1,ataque:0,maxAtaque:0,defensa:0,maxDefensa:0,tactica:0,maxTactica:0,movimiento:0,maxMovimiento:0,activo:true}
  ];
  
