import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class UploadService {
  private supportedFormats = [
    "image/jpeg",
    "image/png",
    "video/mp4",
    "video/avi"
  ];

  constructor() {}

  isFormatSupported(file: File): boolean {
    return this.supportedFormats.includes(file.type);
  }

  // Subir archivo
  uploadFile(file: File): Promise<any> {
    
    return new Promise((resolve, reject) => {
      if (this.isFormatSupported(file)) {
        
        // Simulación
        setTimeout(() => resolve({ success: true }), 1000);
      } else {
        reject({
          success: false,
          message: "Formato no soportado!"
        });
      }
    });
  }
}
