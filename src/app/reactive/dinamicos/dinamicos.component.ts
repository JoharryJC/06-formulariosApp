import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)] ], 
    favoritos: this.fb.array([
      ['Metal Gear'], 
      ['Death Stranding'], 

    ], Validators.required )
  });

  //el nuevoFavorito no forma parte de miFormulario, 
  // y no se podra usar en el formControlName, 
  //por lo tanto debo referenciarlo en el html con 
  //la opcion [formControl] 
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray; 
  }

  constructor(private fb: FormBuilder) { }



  ngOnInit(): void {
    /* lo comente, porque me estaba borrando el this.fb.array 
    this.miFormulario.reset({
      nombre: 'RTX 4080Ti' 
    })
    */
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid ) { return; }

    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required )); 
    //this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, Validators.required )); 

    this.nuevoFavorito.reset(); 

  }
 
  guardar() {

    if (this.miFormulario.invalid) {      
      this.miFormulario.markAllAsTouched();
      return; 
    }  

    console.log(this.miFormulario.value); 
    this.miFormulario.reset();     

  }

  campoEsValido(campo: string ) {
    return  this.miFormulario.controls[campo].errors && 
            this.miFormulario.controls[campo].touched; 
  }

}
