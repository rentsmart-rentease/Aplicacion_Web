import { Component, Input } from "@angular/core";

@Component({
  selector: "app-unsupported-format-error",
  templateUrl: "./unsupported-format-error.component.html",
  styleUrl: "./unsupported-format-error.component.css",
})

export class UnsupportedFormatErrorComponent {
  @Input() message: string | null = null;
}
