import { Gender, Fruit } from './../interface';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  public myRegistrationForm!: FormGroup;
  public submit: boolean = false;
  public favFruit:String = "Select your Favorite : ";
  public formValue: String = '';

  public genders: Gender[] = [
    { id: 1, genderType: 'Male' },
    { id: 2, genderType: 'Female' },
  ];

  public fruitsArr: Fruit[] = [
    { name: 'Pear', value: 'Pear' },
    { name: 'Plum', value: 'Plum' },
    { name: 'Kiwi', value: 'Kiwi' },
    { name: 'Apple', value: 'Apple' },
    { name: 'Lime', value: 'Lime' },
    { name: 'Other', value: 'Other' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.myRegistrationForm = new FormGroup({
      name: new FormControl('Test-name', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('test@test.test', [
        Validators.required,
        Validators.email,
      ]),
      gender: new FormControl('Male', Validators.required),
      country: new FormControl('India', Validators.required),
      state: new FormControl('Gujarat', Validators.required),
      city: new FormControl('Surat', Validators.required),
      fruits: new FormArray([], [Validators.required]),
    });
  }

  //checkbox validation
  public onCheckboxChange(check: any): void {
    const fruits: FormArray = this.myRegistrationForm.get(
      'fruits'
    ) as FormArray;
    if (check.target.checked) {
      fruits.push(new FormControl(check.target.value));
    } else {
      let i: number = 0;
      fruits.controls.forEach((item) => {
        if (item.value == check.target.value) {
          fruits.removeAt(i);
          return ;
        }
        i++;
      });
    }
  }

  //no white spaces
  public noWhiteSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { noWhiteSpace: true };
    }
    return null;
  }

  //submit
  public onSubmit(): void {
    this.submit = !this.submit;

    const { city, country, email, gender, fruits, name, state } =
      this.myRegistrationForm.value;

    this.formValue = this.myRegistrationForm.value;
    this.onReset();
  }

  //reset form
  public onReset(): void {
    this.myRegistrationForm.reset();
  }
}
