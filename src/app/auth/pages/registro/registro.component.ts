import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group ({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern) ] ], 
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)] ], 
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider ]  ], 
    password: ['', [Validators.required, Validators.minLength(6) ]  ], 
    password2: ['', [Validators.required ]  ], 
  } /*, {
    //no funciona esta validacion, a pesar de que es exactamente igual a la del curso
    //esta deprecada esta funcion 
    Validators: [this.validatorService.camposIguales('password', 'password2')] 
  }  */
  );

  constructor(private fb: FormBuilder, 
    private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Fernando Herrera', 
      email: 'test1@test.com', 
      username: 'jhony_her85'
    })
  }

  campoNoValido (campo: string) {
    return this.miFormulario.get(campo)?.invalid 
            && this.miFormulario.get(campo)?.touched; 
  }

  submitFormulario() {
    console.log(this.miFormulario.value); 

    this.miFormulario.markAllAsTouched(); 

  }

}
