import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppointmentsModule } from "./appointments/appointments.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppointmentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
