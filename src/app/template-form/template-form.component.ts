import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;
  public minlength = '3';
  public submit = false;

  constructor() {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    this.submit = !this.submit;
    console.log('Button is working :>> ', form);
  }
}
