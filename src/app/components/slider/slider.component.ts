import { Component, OnInit, Input } from '@angular/core';
import { first } from 'rxjs';
declare var $: any;


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  @Input() juego:any = []

  esconderControlesHome:boolean = true;
  esconderControlesDetalle:boolean = false;


  constructor() { 
    
  }

  ngOnInit(): void {

    if(this.juego.length > 5){
        
      this.esconderControlesHome = true;
      this.esconderControlesDetalle = false;
    
    }else{
        
      this.esconderControlesHome = false;
      this.esconderControlesDetalle = true;
    }
    
    
    //console.log(this.juego)

    $(document).ready(function(){
      $(".carousel-item:first").addClass('active');
      $(".boton:first").addClass('active');

      $(".boton:first").attr('aria-current', 'true')
      $(".boton:first").attr('aria-label', 'Slide 1')






    })

    
  }

}
