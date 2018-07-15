import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Credential } from '../../models/credential';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: '',
      password: ''
    });
  }

  login() {
    this.auth.authen(this.loginForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.auth.setToken(data.token);
          this.router.navigate(['/admin']);
        },
        error => {
          console.log(error);
          alert(error.message);
        });
  }
}
