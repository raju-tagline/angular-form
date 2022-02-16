import { UserData } from './interface';
import { HttpDataService } from './http-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'forms';
  public currentTime: Date = new Date();
  public details: string = `The built-in pipes are those which are already given to us by the Angular and are ready to use. `;
  public searchName = ''
  public object: Object = {
    name: 'Mr. abcd',
    username: 'qux_asd',
    address: { country: 'IND', State: 'Gujarat', city: 'surat' },
  };
  public productArr = [
    {
      sno:1,
      product:'Laptop',
      price:'42,000',
      available:'Available'
    },
    {
      sno:2,
      product:'Iphone x',
      price:'30,000',
      available:'Not Available'
    },
    {
      sno:3,
      product:'Apple charger',
      price:'1900',
      available:'Available'
    },
    {
      sno:4,
      product:'Ipad Air',
      price:'35,000',
      available:'Available'
    },
    {
      sno:5,
      product:'Dell 5000',
      price:'45,000',
      available:'Not Available'
    },
    {
      sno:6,
      product:'AC',
      price:'1,42,000',
      available:'Available'
    },
  ];
  public userData:UserData[] = [{
    userId:1,
    no:1,
    title:'asdf',
    completed:'asdf'
  }]

  constructor(private httpDataService:HttpDataService){
    this.httpDataService.getData().subscribe((data)=>{
      this.userData = data;
    });
    this.httpDataService.postUsers({ userId:102,no:202,title:'Post is working !',completed:'okk' }).subscribe((data1) => {
      console.log('data1 :>> ', data1);
    });
    this.httpDataService.updateUser(1,{userId:999,no:222,title:'put is working !',completed:'okk'}).subscribe((data2)=>{
      console.log('data2 :>> ', data2);
    });
    this.httpDataService.deleteUser(101).subscribe((data3)=>{
      console.log('data3 :>> ', data3);
    })
  }

}

