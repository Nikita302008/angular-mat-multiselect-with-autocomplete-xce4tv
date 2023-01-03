import { Component, Input, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-comp',
  template: `
    <form [formGroup]="f" (submit)="subs()">
      <mat-form-field>
      <multiselect-autocomplete-example formControlName="mm">
      </multiselect-autocomplete-example></mat-form-field>
      <input type="submit">
    </form>
  `
})
export class AppComponent {

  f:FormGroup;

  constructor( private fb: FormBuilder ){
    this.f = this.fb.group({
      mm: ['']
    })
  }

  subs(){
    console.log ( this.f.value );
  }


}