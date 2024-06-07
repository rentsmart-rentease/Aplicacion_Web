import { Component } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})

export class UploadComponent {
  selectedFile: File | null = null;
  errorMessage: string | null = null;

  constructor(private uploadService: UploadService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.errorMessage = null;
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile).then(response => {
        console.log('File uploaded successfully:', response);
      }).catch(error => {
        this.errorMessage = error.message;
      });
    }
  }
}
