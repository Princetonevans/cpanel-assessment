import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-software',
  templateUrl: './register-software.component.html',
  styleUrls: ['./register-software.component.css']
})
export class RegisterSoftwareComponent {

  myForm = this.fb.group({
    name: ['', Validators.minLength ],
    password: [''],
    userNumber: ['', Validators.required],
    location: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  submit() {
    console.log(this.myForm.value)
  }

}