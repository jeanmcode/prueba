import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-annios',
  templateUrl: './annios.page.html',
  styleUrls: ['./annios.page.scss'],
})
export class AnniosPage implements OnInit {

  identity: string;
  public annios=[ 

  ];

  public dlsistemas=[
       
    {title:'1er Año', id:'lsprimerAño'},
    {title:'2do Año', id:'lssegundoAño'},
    {title:'3er Año', id:'lstercerAño'},
    {title:'4to Año', id:'lscuartoAño'},
    {title:'5to Año', id:'lsquintoAño'},
  

  ];

  public djsistemas=[
       
    {title:'1er Año', id:'jsprimerAño'},
    {title:'2do Año', id:'jssegundoAño'},
    {title:'3er Año', id:'jstercerAño'},
    {title:'4to Año', id:'jscuartoAño'},
    {title:'5to Año', id:'jsquintoAño'},
  

  ];

  public dlcomputacion=[
       
    
    {title:'2do Año', id:'dlcsegundoAño'},
    {title:'3er Año', id:'dlctercerAño'},
    {title:'4to Año', id:'dlccuartoAño'},
    {title:'5to Año', id:'dlcquintoAño'},
  

  ];

  public djcomputacion=[
       
    
    {title:'2do Año', id:'djcsegundoAño'},
    {title:'3er Año', id:'djctercerAño'},
    {title:'4to Año', id:'djccuartoAño'},
    {title:'5to Año', id:'djcquintoAño'},
  

  ];

  public docomputacion=[
       
    
    {title:'2do Año', id:'docsegundoAño'},
    {title:'3er Año', id:'doctercerAño'},
    {title:'4to Año', id:'doccuartoAño'},
    {title:'5to Año', id:'docquintoAño'},
  

  ];

  public dltelematica=[ // se coloca dtelematica(diurno) porque cuando el usuario presione lunes y luego primer año
                      // entonces se mostraran las clases de ese dia.
    {title:'1er Año', id:'dltprimerAño'},
   /* {title:'2do Año', id:'dltsegundoAño'},
    {title:'3er Año', id:'dlttercerAño'},
    {title:'4to Año', id:'dltcuartoAño'},
    {title:'5to Año', id:'dltquintoAño'},*/
  
  ];

  public djtelematica=[ // se coloca dtelematica(diurno) porque cuando el usuario presione lunes y luego primer año
    // entonces se mostraran las clases de ese dia.
{title:'1er Año', id:'djtprimerAño'},
/*{title:'2do Año', id:'djtsegundoAño'},
{title:'3er Año', id:'djttercerAño'},
{title:'4to Año', id:'djtcuartoAño'},
{title:'5to Año', id:'djtquintoAño'},*/

];

  public dotelematica=[
       
    {title:'1er Año', id:'dotprimerAño'},
    /*{title:'2do Año', id:'dotsegundoAño'},
    {title:'3er Año', id:'dottercerAño'},
    {title:'4to Año', id:'dotcuartoAño'},
    {title:'5to Año', id:'dotquintoAño'},*/
  
  ];




  constructor(
    private active:ActivatedRoute,
    private localStorageService: LocalStorageService,
    ) {
      this.active.params.subscribe(param=>this.getDays(param.id)) 
    }


  async ngOnInit() {
    // SACAR DATOS USUARIO IDENTIFICADO
    this.identity =   await  this.localStorageService.getIdentity('identity');
  }

  getDays(id: string){

    console.log('Hola');
    switch(id)
    {
      
      case 'slunes':

      this.annios=this.dlsistemas;
      break;

      case 'sjueves':

      this.annios=this.djsistemas;
      break;

      case 'tlunes':

      this.annios=this.dltelematica;
      break;

      case 'tjueves':

      this.annios=this.djtelematica;
      break;

      case 'clunes':
      
      this.annios=this.dlcomputacion;
      break;

      case 'cjueves':
      
      this.annios=this.djcomputacion;
      break;

      case 'cdomingo':
      
      this.annios=this.docomputacion;
      break;

      case 'tdomingo':
      
      this.annios=this.dotelematica;
      break;

      


    }


  }

  openModalNew(value: number ) {}

}
