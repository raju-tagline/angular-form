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

  constructor() {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    console.log('Button is working :>> ', form);
  }
}
