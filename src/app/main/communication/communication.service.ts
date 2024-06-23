import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommunicationService {
  private maxFileSize = 500 * 1024 * 1024; // 500MB

  constructor() {}

  sendMessage(message: string, files: File[]): Promise<any> {
    return new Promise((resolve, reject) => {
      const oversizedFiles = files.filter((file) => file.size > this.maxFileSize);

      if (oversizedFiles.length > 0) {
        reject({
          success: false,
          message: "Uno de los archivos excede el tamaño máximo de 500MB",
        });
      } else {
        // Simulación
        setTimeout(() => resolve({ success: true, message: "Mensaje enviado exitosamente" }), 1000);
      }
    });
  }
}
