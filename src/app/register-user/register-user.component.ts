import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisteruserService } from '../registeruser.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  form: FormGroup;

  constructor(private register: RegisteruserService,
    public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.form = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  registerUser() {
    if (this.form.valid) {
      this.register.register(this.form.value).subscribe(result => {
        if (result.statuscode == 200) {
          console.log(result);
          alert(result.message);
          this.router.navigate(["login"]);
        } else {
          console.log(result.message)
          alert(result.message);

        }
      })
    }
  }
  login() {
    this.router.navigate(["login"]);
  }
}
