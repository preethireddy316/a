import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.actions';
import { AuthState } from '../state/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup;
  constructor(private store:Store<AuthState>) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    const email=this.loginForm.value.email
    const password=this.loginForm.value.password
    if(this.loginForm.valid) {
      console.log(this._v());
    }
    // this.store.dispatch(setLoadingSpinner({status:true}))
    this.store.dispatch(loginStart({email,password}))
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  _v() {
    return this.loginForm.value;
  }
}

