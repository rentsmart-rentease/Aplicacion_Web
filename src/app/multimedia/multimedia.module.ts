import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { UnsupportedFormatErrorComponent } from './unsupported-format-error/unsupported-format-error.component';



@NgModule({
  declarations: [
    UploadComponent,
    UnsupportedFormatErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MultimediaModule { }
