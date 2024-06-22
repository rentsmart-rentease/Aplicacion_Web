import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { delay, map } from "rxjs/operators";

interface Appointment {
  date: Date;
  isAvailable: boolean;
}

@Injectable({
  providedIn: "root",
})
export class AppointmentsService {
  private appointments: Appointment[] = [
    // Datos de ejemplo
    {
      date: new Date("2024-06-16T10:00:00"),
      isAvailable: true,
    },
    {
      date: new Date("2024-06-16T11:00:00"),
      isAvailable: true,
    },
    {
      date: new Date("2024-06-16T12:00:00"),
      isAvailable: false,
    },
    {
      date: new Date("2024-06-16T13:00:00"),
      isAvailable: false,
    },
    {
      date: new Date("2024-06-16T14:00:00"),
      isAvailable: true,
    },
    // ...
  ];

  constructor() {}

  getAvailableAppointments(): Observable<Appointment[]> {
    // Simulación de petición de citas disponibles
    return of(this.appointments).pipe(delay(300));
  }

  bookAppointment(date: Date): Observable<any> {
    return of(null).pipe(
      delay(500),
      map(() => {
        const appointment = this.appointments.find((a) => a.date.getTime() === date.getTime());
        
        if (appointment && appointment.isAvailable) {
          appointment.isAvailable = false;
          return {
            success: true,
            message: "Cita agendada exitosamente"
          };
        } else {
          return throwError({
            success: false,
            message: "Este horario ya está ocupado."
          });
        }
      }),
    );
  }
}
