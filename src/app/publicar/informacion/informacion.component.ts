import { Component, OnInit } from '@angular/core';
import { UploadService } from './upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent implements OnInit{
  selectedFile: File | null = null;
  errorMessage1: string | null = null;
  errorMessage2: string | null = null;
  errorMessage3: string | null = null;
  condicion1: boolean = false;
  condicion2: boolean = false;
  condicion3: boolean = false;
  continuar: boolean = false;

  form: FormGroup

  constructor(
    private uploadService: UploadService,
    private fb: FormBuilder,
    private router: Router,
  ) { 
    this.form = this.fb.group({
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onFileSelected1(event: any): void {
    this.selectedFile = event.target.files[0];
    this.errorMessage1 = null;
    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile).then(response => {
        console.log('File uploaded successfully:', response);
        this.condicion1 = true;
        this.comprobar();
      }).catch(error => {
        this.errorMessage1 = error.message;
        this.condicion1 = false;
        this.comprobar();
      });
    }
    this.comprobar();
  }

  onFileSelected2(event: any): void {
    this.selectedFile = event.target.files[0];
    this.errorMessage2 = null;
    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile).then(response => {
        console.log('File uploaded successfully:', response);
        this.condicion2 = true;
        this.comprobar();
      }).catch(error => {
        this.errorMessage2 = error.message;
        this.condicion2 = false;
        this.comprobar();
      });
    }
  }

  onFileSelected3(event: any): void {
    this.selectedFile = event.target.files[0];
    this.errorMessage3 = null;
    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile).then(response => {
        console.log('File uploaded successfully:', response);
        this.condicion3 = true;
        this.comprobar();
      }).catch(error => {
        this.errorMessage3 = error.message;
        this.condicion3 = false;
        this.comprobar();
      });
    }
  }

  comprobar(): void {
    console.log(this.condicion1, this.condicion2, this.condicion3);
    if (this.condicion1 && this.condicion2 && this.condicion3) {
      if(this.form.valid)
        {
          this.continuar = true;
        }
    }
  }

  enviar(): void {
    if (this.form.invalid) {
      return;
    }
    console.log('Enviando formulario');
    
    this.router.navigate(['/publicar/end']); 

  }
}
