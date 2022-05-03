import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  form=new FormGroup({
    topics: new FormArray([])
  })

  add(topic:any){
    this.topics.push(new FormControl(topic.value))
    topic.value=""
    console.log(this.topics);
    
  }

  remove(topic:any){
    let i= this.topics.controls.indexOf(topic)
    this.topics.removeAt(i)
  }

  get topics(){
    return this.form.get('topics') as FormArray
  }
}
