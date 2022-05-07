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

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    //coloque el signo de interrogacion, para que no evalue lo demas si la 
    //variable controls no se ha terminado de inicializar 
    return this.miFormulario?.controls['producto']?.invalid && 
    this.miFormulario?.controls['producto']?.touched
  }

  guardar() {
    console.log('Submit hecho...!');
    console.log(this.miFormulario.value); 
    //console.log(miFormulario); 
  }

  /*
  guardar(miFormulario: NgForm) {
    console.log('Submit hecho...!');
    console.log(miFormulario.value); 
    //console.log(miFormulario); 
  }
  */


}
