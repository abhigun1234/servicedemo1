import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public myId="testId"
  public showcontent=false
  public color='red'
  fruits=['apple','banana','orange','chicku']
  constructor() { }

  ngOnInit() {
  }

}
