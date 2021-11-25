import {Component, OnInit } from '@angular/core';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginService, private reroute: Router) { }

  ngOnInit(): void {}

  loginInteract(status: string){
    if(status == 'SIGNED IN'){
      this.loginService.signOut()
    }
    else{
      this.reroute.navigate(['/login'])
    }
  }
}
