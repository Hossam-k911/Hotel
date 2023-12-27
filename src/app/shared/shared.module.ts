import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
    }),
  ],
  exports: [ReactiveFormsModule, FormsModule, ToastrModule],
})
export class SharedModule {}
