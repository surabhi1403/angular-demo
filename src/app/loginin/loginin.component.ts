import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginin',
  templateUrl: './loginin.component.html',
  styleUrls: ['./loginin.component.css']
})
export class LogininComponent implements OnInit {
  todaydate;
  componentproperty;
  emailid;
  formdata;
  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
         Validators.required,
         Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("")
   });
  }
  onClickSubmit(data) {this.emailid = data.emailid;}
}
