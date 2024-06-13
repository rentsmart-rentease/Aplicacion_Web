import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageComponent } from "./message/message.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [MessageComponent],
})
export class CommunicationModule {}
