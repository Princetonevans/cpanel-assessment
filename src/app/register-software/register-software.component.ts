import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-software',
  templateUrl: './register-software.component.html',
  styleUrls: ['./register-software.component.css']
})
export class RegisterSoftwareComponent {

  myForm = this.fb.group({
    name: ['', Validators.required ],
    password: ['', Validators.required],
    userNumber: ['', Validators.required],
    location: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private _snackBar: MatSnackBar) { }

  register(formDirective: FormGroupDirective) {
    console.log(this.myForm.value);
    formDirective.resetForm();
    this._snackBar.open('Registration Received', 'Undo', {
      duration: 2000,
    });
  
  }

}