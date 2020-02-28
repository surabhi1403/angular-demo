import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title:string = 'header';
  @Output() notifyAction = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  notifyuser(){
    //alert("hello")
    this.notifyAction.emit('hello');
  }

}
