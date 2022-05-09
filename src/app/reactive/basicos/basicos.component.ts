import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

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
    nombre: ['RTX 4080Ti', [Validators.required, Validators.minLength(3)] ], 
    precio: [0, [Validators.required, Validators.min(0)] ], 
    existencias: [0, [Validators.required, Validators.min(0)] ] 
  });


  constructor(private fb: FormBuilder) { }

  

}
