import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CoreService } from '../../services/core.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup = new FormGroup({});
  hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private core: CoreService // private core: CoreService, // public dialog: MatDialog, // private toastr: ToastrService
  ) {
    this.signinForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
        ),
      ]),
    });
  }

  ngOnInit(): void {}

  login(): void {
    this.core.login(this.signinForm.getRawValue()).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.data.token.split(' ')[1]);
        this.toastr.success(res.message, 'Success');
      },
      error: (err: any) => {
        this.toastr.error(err.error.message, 'Error');
      },
      complete: () => {
        this.core.getProfile();
        // this.router.navigate(['/features']);
        if (localStorage.getItem('role') === 'admin') {
          this.router.navigate(['/admin']);
        } else if (localStorage.getItem('role') === 'user') {
          this.router.navigate(['/landing-page']);
        }
      },
    });
  }
}
