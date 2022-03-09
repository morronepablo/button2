import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  public celda1 = true;
  public celda2 = true;
  public celda3 = true;
  public celda4 = true;
  public celda5 = true;
  public celda6 = true;
  public celda7 = true;
  public celda8 = true;
  public celda9 = true;
  public claseFront1: string = "";
  public claseBack1: string = "";
  public claseFront2: string = "";
  public claseBack2: string = "";
  public claseFront3: string = "";
  public claseBack3: string = "";
  public claseFront4: string = "";
  public claseBack4: string = "";
  public claseFront5: string = "";
  public claseBack5: string = "";
  public claseFront6: string = "";
  public claseBack6: string = "";
  public claseFront7: string = "";
  public claseBack7: string = "";
  public claseFront8: string = "";
  public claseBack8: string = "";
  public claseFront9: string = "";
  public claseBack9: string = "";
  public clasePresione: string = "";
  public contadorCeldas: number = 0;
  public playStart = true;
  public celdaPush: string;

  constructor() {
    this.celdaPush = '';
  }

  ngOnInit(): void {
  }

  sumar() {
    this.contadorCeldas += 1;
  }

  blanquearCeldas() {
    this.claseFront1 = "";
    this.claseBack1 = "";
    this.claseFront2 = "";
    this.claseBack2 = "";
    this.claseFront3 = "";
    this.claseBack3 = "";
    this.claseFront4 = "";
    this.claseBack4 = "";
    this.claseFront5 = "";
    this.claseBack5 = "";
    this.claseFront6 = "";
    this.claseBack6 = "";
    this.claseFront7 = "";
    this.claseBack7 = "";
    this.claseFront8 = "";
    this.claseBack8 = "";
    this.claseFront9 = "";
    this.claseBack9 = "";
    this.celda1 = true;
    this.celda2 = true;
    this.celda3 = true;
    this.celda4 = true;
    this.celda5 = true;
    this.celda6 = true;
    this.celda7 = true;
    this.celda8 = true;
    this.celda9 = true;
  }

  goCelda1(): void {
    this.sumar();
    if (this.contadorCeldas == 9) {
      this.playStart = true;
    }
    console.log(this.contadorCeldas);
    this.celda1 = false;
    this.celdaPush = 'celda1';
    this.claseFront1 = "clickFont"
    this.claseBack1 = "clickBack"
  }
  goCelda2(): void {
    this.sumar();
    if (this.contadorCeldas == 9) {
      this.playStart = true;
    }
    console.log(this.contadorCeldas);
    this.celda2 = false;
    this.celdaPush = 'celda2';
    this.claseFront2 = "clickFont"
    this.claseBack2 = "clickBack"
  }
  goCelda3(): void {
    this.sumar();
    if (this.contadorCeldas == 9) {
      this.playStart = true;
    }
    console.log(this.contadorCeldas);
    this.celda3 = false;
    this.celdaPush = 'celda3';
    this.claseFront3 = "clickFont"
    this.claseBack3 = "clickBack"
  }
  goCelda4(): void {
    this.sumar();
    if (this.contadorCeldas == 9) {
      this.playStart = true;
    }
    console.log(this.contadorCeldas);
    this.celda4 = false;
    this.celdaPush = 'celda4';
    this.claseFront4 = "clickFont"
    this.claseBack4 = "clickBack"
  }
  goCelda5(): void {
    this.sumar();
    if (this.contadorCeldas == 9) {
      this.playStart = true;
    }
    console.log(this.contadorCeldas);
    this.celda5 = false;
    this.celdaPush = 'celda5';
    this.claseFront5 = "clickFont"
    this.claseBack5 = "clickBack"
  }
  goCelda6(): void {
    this.sumar();
    if (this.contadorCeldas == 9) {
      this.playStart = true;
    }
    console.log(this.contadorCeldas);
    this.celda6 = false;
    this.celdaPush = 'celda6';
    this.claseFront6 = "clickFont"
    this.claseBack6 = "clickBack"
  }
  goCelda7(): void {
    this.sumar();
    if (this.contadorCeldas == 9) {
      this.playStart = true;
    }
    console.log(this.contadorCeldas);
    this.celda7 = false;
    this.celdaPush = 'celda7';
    this.claseFront7 = "clickFont"
    this.claseBack7 = "clickBack"
  }
  goCelda8(): void {
    this.sumar();
    if (this.contadorCeldas == 9) {
      this.playStart = true;
    }
    console.log(this.contadorCeldas);
    this.celda8 = false;
    this.celdaPush = 'celda8';
    this.claseFront8 = "clickFont"
    this.claseBack8 = "clickBack"
  }
  goCelda9(): void {
    this.sumar();
    if (this.contadorCeldas == 9) {
      this.playStart = true;
    }
    console.log(this.contadorCeldas);
    this.celda9 = false;
    this.celdaPush = 'celda9';
    this.claseFront9 = "clickFont"
    this.claseBack9 = "clickBack"
  }
  goPlay(): void {
    console.log(this.playStart);

    if (this.contadorCeldas == 9) {
      this.blanquearCeldas();
      this.contadorCeldas = 0;
    }
    this.playStart = false;
    this.clasePresione = 'click'
  }

}
