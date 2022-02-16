import { Observable } from 'rxjs';
import { UserData, ProductArr } from './interface';
import { HttpDataService } from './http-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  public title = 'forms';
  public currentTime: Date = new Date();
  public details: string = `The built-in pipes are those which are already given to us by the Angular and are ready to use. `;
  public searchName = '';
  public object: Object = {
    name: 'Mr. abcd',
    username: 'qux_asd',
    address: { country: 'IND', State: 'Gujarat', city: 'surat' },
  };
  
  public productArr : ProductArr[] = [
    {
      sno: 1,
      product: 'Laptop',
      price: 2000,
      available: 'Available',
    },
    {
      sno: 2,
      product: 'Iphone x',
      price: 30000,
      available: 'Not Available',
    },
    {
      sno: 3,
      product: 'Apple charger',
      price: 1900,
      available: 'Available',
    },
    {
      sno: 4,
      product: 'Ipad Air',
      price: 35000,
      available: 'Available',
    },
    {
      sno: 5,
      product: 'Dell 5000',
      price: 45000,
      available: 'Not Available',
    },
    {
      sno: 6,
      product: 'AC',
      price: 142000,
      available: 'Available',
    },
  ];

  public userData: UserData[] = [
    {
      userId: 1,
      id: 1,
      title: 'asdf',
      completed: 'asdf',
    },
  ];

  constructor(private httpDataService: HttpDataService) {}

  ngOnInit(): void {
    // this.httpDataService.getData();
    
  }

  public postData():void{
    this.httpDataService.userD$().subscribe((data:UserData[])=>{
      console.log('data :>> ', data);
    });
    this.httpDataService.postUsers([{ userId:102,id:202,title:'Post is working !',completed:'okk' }]).subscribe((data1) => {
      console.log('Post data :>> ', data1);
    }); 
  }

  public getData():void{

    this.httpDataService.getData().subscribe((data)=>{
      this.userData = data;
      this.httpDataService.userDetail$.next(this.userData);
    });
  }

  public deleteData(id:number):void{
    this.httpDataService.deleteUser(id).subscribe((data3)=>{
      this.userData.pop()?.id;
      console.log('Delete data :>> ', data3);
      console.log('id :>> ', id);
      console.log('this.userData.length :>> ', this.userData.length);
    });
  }

  public updateData():void{
    this.httpDataService.updateUser(1,[{userId:999,id:222,title:'put is working !',completed:'okk'}]).subscribe((data2)=>{
      console.log('Update data :>> ', data2);
    });
  }
}
