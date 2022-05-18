import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }

  noPuedeSerStrider (control: FormControl ) : ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase(); 
    console.log(control.value); 
    
    if (valor == 'strider') {
      //return ERROR 
      return {
        noStrider: true 
      }
    }

    return null; 
  }

 /*
  camposIguales(campo1: string, campo2: string): ValidationErrors|null {
      return (formGroup: AbstractControl) : ValidationErrors|null => {
        //console.log(formGroup);  
        const pass1 = formGroup.get(campo1)?.value;
        const pass2 = formGroup.get(campo2)?.value;

        if (pass1 !== pass2) {
          return {noIguales: true} 
        } 

        return null
      }
  }
*/

camposIguales(campo1: string, campo2: string): ValidationErrors|null {
  return (formGroup: AbstractControl) : ValidationErrors|null => {
    
    const pass1 = formGroup.get(campo1)?.value;
    const pass2 = formGroup.get(campo2)?.value;

    console.log(pass1, pass2);

    if (pass1 !== pass2) {
      formGroup.get(campo2)?.setErrors({ noIguales: true });
      return {noIguales: true} 
    } 

    formGroup.get(campo2)?.setErrors(null);
    
    return null 
  }


}




}
