import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisteruserService } from '../registeruser.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private login: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }

  loginUser() {
    if (this.form.valid) {
      this.login.login(this.form.value).subscribe(result => {
        if (result.statuscode == 200) {
          var token = result.data;
          console.log(token);
          let key = "jwt";
          let value = token
          sessionStorage.setItem(key, value);
          console.log(result);
          this.router.navigate(["profile"]);

        } else {
          console.log(result.message)
          alert(result.message);
        }
      })
    }
  }

}
