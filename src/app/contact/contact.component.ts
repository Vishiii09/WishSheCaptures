import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  isOpen: boolean = false;
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  constructor(private location: Location) {}

  ngOnInit(): void {}

  close() {
    this.isOpen = false;
    this.location.back();
  }

  submitForm() {
    if (this.contactForm.valid) {
      // Handle form submission
      console.log('Form Submitted', this.contactForm.value);
    } else {
      // Mark all fields as touched to trigger validation
      this.contactForm.markAllAsTouched();
    }
  }
}
