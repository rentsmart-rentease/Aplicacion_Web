import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MultimediaModule } from "./multimedia/multimedia.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MultimediaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
