import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080ti', 
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    //coloque el signo de interrogacion, para que no evalue lo demas si la 
    //variable controls no se ha terminado de inicializar 
    return this.miFormulario?.controls['producto']?.invalid && 
    this.miFormulario?.controls['producto']?.touched; 
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.touched && 
    this.miFormulario?.controls['precio']?.value < 0;      
  }

  guardar() {
    console.log('Submit o Posteo hecho...!');
    console.log(this.miFormulario.value); 
    //console.log(miFormulario); 

    this.miFormulario.resetForm({
      producto: 'algo', 
      precio: 0, 
      existencias: 0 
    });

  }

  /*
  guardar(miFormulario: NgForm) {
    console.log('Submit hecho...!');
    console.log(miFormulario.value); 
    //console.log(miFormulario); 
  }
  */


}
