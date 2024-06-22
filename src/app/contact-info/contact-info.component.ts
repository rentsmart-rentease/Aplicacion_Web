// src/app/contact-info/contact-info.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  ownerName: string = 'John Doe';
  contactNumber: string = '123-456-7890';
}
