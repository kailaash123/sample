import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators{
    static oldp(control:AbstractControl): Promise<ValidationErrors|null>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(control.value=="abc"){
                    resolve({oldp:true})
                }
                else
                    resolve(null)
            }, 2000);
        })
    }

    static incorrect(control:AbstractControl):ValidationErrors|null{
        if(control.value!="abc" && control.value!=""){
            return {incorrect:true}
        }
        return null
    }

    static shouldMatch(control:AbstractControl):ValidationErrors|null{
        let new1=control.get('newp')
        let conf=control.get('confirm')
        if((new1?.value!=conf?.value) && new1?.value!="" && conf?.value!="")
            return {shouldMatch:true}
        return null
    }
}