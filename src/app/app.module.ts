import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ValidationModule } from "./validation/validation.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ValidationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
