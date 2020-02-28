import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("")
    });
  }
  onClickSubmit(data) {
    this.emailid = data.emailid;
    this.router.navigate(['/home'])
  }
}
