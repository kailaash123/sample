import { AbstractControl, ValidationErrors } from "@angular/forms";


export class UsernameValidators{
    static noSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ')>=0){
            return {noSpace:true}
        }
        return null
    }

    static shouldBeUnique(control:AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(control.value=="asd"){
                    resolve({shouldBeUnique:true})
                }
                else
                    resolve(null)
            }, 2000);
        })
    }
}