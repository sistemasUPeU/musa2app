import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import { LoginService } from "src/app/service/login.service";
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario : Usuario;
  
  constructor(private loginService:LoginService ,private router:Router) {
    this.usuario = new Usuario();

   }

  ngOnInit() {
    

    $(document).ready(function () {

      $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
      $(this)
        .parent()
        .hasClass("active")
      ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
      } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .next(".sidebar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
      }
      });
      
      $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
      });
      $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
      });
      
      
      
      
      });
  }

}
