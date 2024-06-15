import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppointmentsService } from "../appointments.service";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrl: "./schedule.component.css",
})

export class ScheduleComponent implements OnInit {
  form: FormGroup;
  availableAppointments: any[] = [];
  message: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private appointmentsService: AppointmentsService) {
    this.form = this.fb.group({
      appointment: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentsService.getAvailableAppointments().subscribe(appointments => {
      this.availableAppointments = appointments.filter(a => a.isAvailable);
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.appointmentsService.bookAppointment(this.form.value.appointment).subscribe(
        response => {
          this.message = response.message;
          this.errorMessage = null;
          this.loadAppointments();
        },
        error => {
          this.errorMessage = error.message;
          this.message = null;
        }
      );
    }
  }
}
