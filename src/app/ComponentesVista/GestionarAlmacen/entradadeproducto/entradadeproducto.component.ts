import { Component, OnInit } from '@angular/core';
import { KardexService } from 'src/app/service/kardex.service';
import { NgForm } from '@angular/forms';
import { Kardex } from './kardex';

@Component({
  selector: 'app-entradadeproducto',
  templateUrl: './entradadeproducto.component.html',
  styleUrls: ['./entradadeproducto.component.css']
})
export class EntradadeproductoComponent implements OnInit {
  kardex: Kardex = new Kardex();
  kardexLista: Kardex[] = [];
  nrocomprobante: number;
  idkardex: String;
  Kardex: Kardex[];
  router: any;
  service: any;
  constructor(private kardexService: KardexService) {}

  ngOnInit() {
    this.getAllKardex();
  }

  getAllKardex(){
    this.kardexService.getAllKardex().subscribe(
     (data) => {
       this.kardexLista = data['P_CURSOR'];
      //  console.log(this.kardexLista)
     } 
    );
  }

  searchKardex(){
    if(this.nrocomprobante != null && this.nrocomprobante > 0){
      this.kardexService.searchKardex(this.nrocomprobante).subscribe(
        (data) => {
       this.kardexLista = data['P_CURSOR'];
        }
      );
    }
    else{
      this.getAllKardex();
    }
  }

  agregarKardex() {

    for ( var key in this.kardex ) {
      console.log( this.kardex[`${key}`]+ " " + key);
      this.kardex[`${key.toLowerCase()}`] = this.kardex[`${key}`];
      delete this.kardex[`${key}`];
    }
    
  //  this.kardexService.postKardex(this.kardex).subscribe( response =>{
  //     console.log(response)
  //   },error => {
  //     console.log(error);
  //    })
   alert("registrado correctamente.....!!");
   console.log(this.kardex);
 }
 editarKardex(){
   
 }
}