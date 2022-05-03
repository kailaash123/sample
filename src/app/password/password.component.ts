import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  form=new FormGroup({
    old:new FormControl('',[Validators.required,PasswordValidators.incorrect]),
    newp:new FormControl('',Validators.required),
    confirm:new FormControl('',Validators.required)
  })
  constructor(){
    this.form.setValidators(PasswordValidators.shouldMatch)
  }

  get old(){
    return this.form.get('old')
  }
  get newp(){
    return this.form.get('newp')
  }
  get confirm(){
    return this.form.get('confirm')
  }
}
