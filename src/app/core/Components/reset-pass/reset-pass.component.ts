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
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss'],
})
export class ResetPassComponent {
  resetPasswordForm: FormGroup = new FormGroup({});
  hide: boolean = true;
  hide2: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private core: CoreService
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
        ),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
        ),
      ]),
      seed: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  resetPassord(): void {
    this.core
      .resetPassword(this.resetPasswordForm.getRawValue())
      .subscribe((res: any) => {
        debugger;
      });
  }
}
