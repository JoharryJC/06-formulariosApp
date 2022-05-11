import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required ], 
    notificaciones: [true, Validators.required], 
    condiciones: [ false, Validators.requiredTrue ]
  });

  persona = {
    genero: 'F', 
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //no puedo usar la siguiente instruccion, porque 
    //el campo de termino de usos, no forma parte del 
    //objeto persona, entonces lanza un error
    //entonces debemos usar reset  
    //this.miFormulario.setValue(this.persona); 

    //this.miFormulario.reset(this.persona); 
    this.miFormulario.reset({
      ...this.persona, 
      condiciones: true 
    });  

    //la siguiente instruccion es para saber cuando 
    //hay cambios
    this.miFormulario.valueChanges.subscribe( form => {
      console.log(form); 

      delete form.condiciones; 
      this.persona = form;
      console.log(form);      
    });

    //otra forma seria:
    // this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) => {
    //   this.persona = rest; 
    // });

  }
  
  guardar() {
    const formValue = {...this.miFormulario.value};         
    console.log(formValue); 

    //si quiero eliminar el objeto condiciones del formValue, 
    //debo hacer lo siguiente:

    delete formValue.condiciones; 

    console.log(formValue); 

    this.persona = formValue; 

  }


}
