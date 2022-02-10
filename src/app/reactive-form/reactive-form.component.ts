import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  public myRegistrationForm!: FormGroup;

  public submit = false;

  public formValue = '';

  public genders = [
    {
      id: 1,
      genderType: 'Male',
    },
    {
      id: 2,
      genderType: 'Female',
    },
  ];
  public hobbys: string[] = ['Reading', 'Swimming', 'Cricket', 'Tv'];

  // constructor() {}

  ngOnInit(): void {
    this.myRegistrationForm = new FormGroup({
      name: new FormControl('null', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('null@test', [
        Validators.required,
        Validators.email
      ]),
      gender: new FormControl('Male', Validators.required),
      hobby: new FormControl(null, Validators.required),
      country: new FormControl('India', Validators.required),
      state: new FormControl('Gujarat', Validators.required),
      city: new FormControl('Surat', Validators.required),
      checkArray: new FormArray([], [Validators.required])
    });
  }

  public onSubmit() {
    this.submit = !this.submit;

    console.log(
      'this.myRegistrationForm.value :>> ',
      this.myRegistrationForm.value
    );

    const { city, country, email, gender, hobbys, name, state } =
      this.myRegistrationForm.value;

    // this.name = name;
    // this.email = email;
    // this.gen = gender;
    // this.country = country;
    // this.state = state;
    // this.city = city;

    this.formValue = this.myRegistrationForm.value;
    console.log('this.myRegistrationForm :>> ', this.myRegistrationForm.value);
    this.myRegistrationForm.reset();
  }

  public Data: Array<any> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Lime', value: 'lime' },
    { name: 'Other', value: 'Other' },
  ];
  // constructor(private fb: FormBuilder) {
  //   this.myRegistrationForm = this.fb.group({
      
  //   })
  // }
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.myRegistrationForm.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
          if (item.value == e.target.value) {
            checkArray.removeAt(i);
            return;
          }
          i++;
        });
    }
  }
  submitForm() {
    console.log(this.myRegistrationForm.value)
  }

  // public changeGender(e:any){
  //   console.log(e.target.value);
  // }
}
