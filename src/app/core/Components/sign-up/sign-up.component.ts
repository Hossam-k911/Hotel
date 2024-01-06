import { Component } from '@angular/core';
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
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm: FormGroup = new FormGroup({});
  hide: boolean = true;
  hide2: boolean = true;
  imgSrc: any;
  files: File[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private core: CoreService
  ) {
    this.signUpForm = this.formBuilder.group({
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
        ),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
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
      role: new FormControl('user'),
      // profileImage: new FormControl(
      //   'https://www.pinterest.com/pin/6896205670733157/'
      // ),
    });
  }

  ngOnInit(): void {}

  signUp(): void {
    let signUpData = new FormData();

    let singupMap = new Map(Object.entries(this.signUpForm.getRawValue()));
    for (let [key, valu] of singupMap) {
      signUpData.append(key, this.signUpForm.value[key]);
    }

    if (this.imgSrc !== null) {
      signUpData.append('profileImage', this.imgSrc, this.imgSrc.name);
    }
    debugger;
    this.core.signUp(signUpData).subscribe({
      next: (res: any) => {
        this.toastr.success(res.message, 'Success');
        this.router.navigate(['/auth/login']);
      },
      error: (err: any) => {
        this.toastr.error(err.error.message, 'Error');
      },
      complete: () => {},
    });
  }

  onSelect(event: any) {
    this.imgSrc = event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
