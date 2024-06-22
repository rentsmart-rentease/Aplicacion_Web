import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UploadComponent } from "./upload/upload.component";
import { UnsupportedFormatErrorComponent } from "./unsupported-format-error/unsupported-format-error.component";

@NgModule({
  declarations: [UploadComponent, UnsupportedFormatErrorComponent],
  imports: [CommonModule, FormsModule],
  exports: [UploadComponent],
})
export class MultimediaModule {}
