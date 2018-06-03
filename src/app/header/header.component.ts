import { Component, OnInit } from '@angular/core';
import {MdDialog,MdDialogRef} from '@angular/material';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dailog: MdDialog) { }

  ngOnInit() {
  }

  openLoginForm(){

    this.dailog.open(LoginComponent,{width: '500px',height: '450px'})
  }

}
