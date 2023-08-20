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
  inputData_slice: string = '';
  inputData_slice_start: string = '';
  inputData_slice_end: string = '';
  inputData_slice_negative: string = '';
  inputData_modify_str: string = '';
  inputData_split_str: string = '';
  inputData_concat_str_A: string = '';
  inputData_concat_str_B: string = '';
  responseData: any = {};
  responseData_one: any = {};
  responseData_two: any = {};
  responseData_three: any = {};
  responseData_loops: any = {};
  responseData_len: any = {};
  responseData_check: any = {};
  responseData_check_not: any = {};
  responseData_slice: any = {};
  responseData_slice_start: any = {};
  responseData_slice_end: any = {};
  responseData_slice_negative: any = {};
  responseData_modify_str: any = {};
  responseData_split_str: any = {};
  responseData_concat_str: any = {};
  responseData_format_str: any = {};
  responseData_escape_char: any = {};


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

  slicing(){
    const dataToSend = {input:this.inputData_slice}
    this.http.post('http://localhost:5000/api/slicing',dataToSend).subscribe((data:any) =>{
      this.responseData_slice = data;
    })
  }

  slice_start(){
    const dataToSend = {input:this.inputData_slice_start}
    this.http.post('http://localhost:5000/api/slice_start',dataToSend).subscribe((data:any) =>{
      this.responseData_slice_start = data;
    })
  }

  slice_end(){
    const dataToSend = {input:this.inputData_slice_end}
    this.http.post('http://localhost:5000/api/slice_end',dataToSend).subscribe((data:any) =>{
      this.responseData_slice_end = data;
    })
  }

  slice_negative(){
    const dataToSend = {input:this.inputData_slice_negative}
    this.http.post('http://localhost:5000/api/slice_negative',dataToSend).subscribe((data:any) =>{
      this.responseData_slice_negative = data;
    })
  }

  modify_str(){
    const dataToSend = {input:this.inputData_modify_str}
    this.http.post('http://localhost:5000/api/modify_str',dataToSend).subscribe((data:any) =>{
      this.responseData_modify_str = data;
    })
  }

  split_str(){
    const dataToSend = {input:this.inputData_split_str}
    this.http.post('http://localhost:5000/api/split_str',dataToSend).subscribe((data:any) =>{
      this.responseData_split_str = data;
    })
  }

  str_concat(){
    const dataToSend = {input:this.inputData_concat_str_A,input_two:this.inputData_concat_str_B}
    this.http.post('http://localhost:5000/api/str_concat',dataToSend).subscribe((data:any) =>{
      this.responseData_concat_str = data;
    })
  }

  format_str(){
    this.http.get('http://localhost:5000/api/format_str').subscribe((data:any) =>{
      this.responseData_format_str = data;
    });
  }

  escape_char(){
    this.http.get('http://localhost:5000/api/escape_char').subscribe((data:any) =>{
      this.responseData_escape_char= data;
    });
  }
}
