import { PaisService } from './../../service/pais.service';
import { Pais } from './../../../Models/Pais';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  paises: Pais[] | undefined;

  constructor(private paisService: PaisService) { }

  ngOnInit() {
    this.paisService.getAllPaises().subscribe(
      (result: any) =>{
        console.log(result);
      },
      error =>{
        console.log(error);
      }
    )
  }

}
