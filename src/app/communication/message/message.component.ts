import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommunicationService } from "../communication.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrl: "./message.component.css",
})

export class MessageComponent {
  form: FormGroup;
  message: string | null = null;
  files: File[] = [];
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private communicationService: CommunicationService,
  ) {
    this.form = this.fb.group({
      message: ["", [Validators.required, Validators.minLength(10)]],
      files: [null],
    });
  }

  onFileSelected(event: any): void {
    this.files = Array.from(event.target.files);
    this.errorMessage = null;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.communicationService
        .sendMessage(this.form.value.message, this.files)
        .then((response) => {
          this.message = response.message;
        })
        .catch((error) => {
          this.errorMessage = error.message;
        });
    }
  }
}
