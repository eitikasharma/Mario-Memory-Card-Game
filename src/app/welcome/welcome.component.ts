import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
@Input() username:any;
  onFetchUser(event:any)
  {
    console.log("hello");
    this.username = event;
  }
}
