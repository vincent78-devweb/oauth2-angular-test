import { Component, OnInit } from '@angular/core';

import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticateService: AuthenticateService) { }

  ngOnInit() {
  }

  login(){
    console.log("log!")
    this.authenticateService.login().subscribe(() => {
      console.log("return...");
    });
  }

}
