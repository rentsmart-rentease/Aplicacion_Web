import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ScheduleComponent } from "./schedule/schedule.component";

@NgModule({
  declarations: [ScheduleComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ScheduleComponent],
})
export class AppointmentsModule {}
