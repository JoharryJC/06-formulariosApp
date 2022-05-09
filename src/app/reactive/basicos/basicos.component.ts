import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /*

  Este codigo fue el primero que hicimos, 
  pero ahora usaremos FormBuilder 

  miFormulario: FormGroup = new FormGroup({
    'nombre': new FormControl('RTX 4080Ti'),
    'precio': new FormControl(1500),
    'existencias': new FormControl(5),

  });  
  */

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)] ], 
    precio: [0, [Validators.required, Validators.min(0)] ], 
    existencias: [0, [Validators.required, Validators.min(0)] ] 
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //this.miFormulario.setValue({
    this.miFormulario.reset({
      nombre: 'RTX 4080Ti', 
      precio: 1600 
    })
  }

  campoEsValido(campo: string ) {
      return  this.miFormulario.controls[campo].errors && 
              this.miFormulario.controls[campo].touched; 
  }
  
  guardar() {

    if (this.miFormulario.invalid) {
      //esto marcando como que todos los campos fueron tocados, 
      //para que mi formulario muestre los mensajes de error 
      //de todos los campos 
      this.miFormulario.markAllAsTouched();
      return; 
    }  

    console.log(this.miFormulario.value); 
    this.miFormulario.reset(); 
    //puedo incluir en el reset los valores de esta forma:
    /*
    this.miFormulario.reset({
      nombre: 'RTX 4080Ti', 
      precio: 1600 
    })
    */

  }

}
