import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosDataService } from '../service/proyectos-data.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {

  parametro: string ="";
  proyectoData: any={};

  constructor(private ActRoute: ActivatedRoute, private proyectosDataService: ProyectosDataService, private router : Router){
    let id = ''
    ActRoute.params.subscribe(({id : nombreProyecto}) => {
      id = nombreProyecto
    });

    this.parametro = decodeURI(id);
  }

  ngOnInit(): void{
    this.proyectoData = this.proyectosDataService.getProyecto(this.parametro);
  }


  goProyectos(){
    this.router.navigate(['/proyectos'])
  }
}
