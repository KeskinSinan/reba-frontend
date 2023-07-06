import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Login from 'src/app/models/login';
import { RebaService } from 'src/app/services/reba.service';
import Swal from 'sweetalert2';
import {Tooltip} from 'bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  courseCode:string = "";
  sectionNumber!:number;
  loginDto:Login = new Login();

  constructor(private router:Router, private rebaService:RebaService) { }

  ngOnInit(): void {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }

  navigateToCalculator(){
    this.loginDto.courseCode = this.courseCode;
    this.loginDto.sectionNumber = this.sectionNumber;
    this.rebaService.loginCheck(this.loginDto).subscribe(res => {
      if(res == true){
        this.router.navigate(['calculation'])
      }
      else {
        Swal.fire({
          title:'Error!',
          text:'Wrong course code and/or section number.',
          icon:'error',
          confirmButtonText:'OK'
        })
      }
    })
  }

}
