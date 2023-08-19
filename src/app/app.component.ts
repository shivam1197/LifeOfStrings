import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeOfString';
  inputData: string = '';
  inputData_arrays: string = '';
  inputData_loops: string = '';
  inputData_len: string = '';
  responseData: any = {};
  responseData_one: any = {};
  responseData_two: any = {};
  responseData_three: any = {};
  responseData_loops: any = {};
  responseData_len: any = {};
  responseData_check: any = {};
  responseData_check_not: any = {};



  constructor(private http: HttpClient){}

  ngOnInit(){}

  printString(){
    this.http.get('http://localhost:5000/api/hello').subscribe((data:any) =>{
      this.responseData = data;
    });
  }
  assignVariable(){
    const dataToSend = {input:this.inputData}
    this.http.post('http://localhost:5000/api/assign_variable',dataToSend).subscribe((data:any) =>{
      this.responseData_one = data;
    },
    (error) => {
    console.error('Error sending data: ',error)
    }
   );
  }

  multiLine_str(){
    this.http.get('http://localhost:5000/api/multiLine_str').subscribe((data:any) =>{
      this.responseData_two = data;
    });
  }

  strArrays(){
    const dataToSend = {input:this.inputData_arrays}
    this.http.post('http://localhost:5000/api/strArrays',dataToSend).subscribe((data:any) =>{
      this.responseData_three = data;
    },
    (error) => {
    console.error('Error sending data: ',error)
    }
   );
  }
  loop_str(){
    const dataToSend = {input:this.inputData_loops}
    this.http.post('http://localhost:5000/api/loop_str',dataToSend).subscribe((data:any) =>{
      this.responseData_loops = data;
    },
    (error) => {
    console.error('Error sending data: ',error)
    }
   );
  }

  strLength(){
    const dataToSend = {input:this.inputData_len}
    this.http.post('http://localhost:5000/api/str_length',dataToSend).subscribe((data:any) =>{
      this.responseData_len = data;
    },
    (error) => {
    console.error('Error sending data: ',error)
    }
   );
  }
  check_str(){
    this.http.get('http://localhost:5000/api/check_str').subscribe((data:any) =>{
      this.responseData_check = data;
    });
  }

  check_str_not(){
    this.http.get('http://localhost:5000/api/check_str_not').subscribe((data:any) => {
      this.responseData_check_not = data;
    });
  }
}
