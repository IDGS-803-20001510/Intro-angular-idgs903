import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  alumnoForm!:FormGroup;
  matricula!:number;
  nombre!:string;
  edad!:number;
  correo!:string;
  pago!:number;
  foto!:string;
  calif!:number;


  constructor(private readonly fb: FormBuilder){
    this.alumnoForm=this.initForm()
  }

  onSubmit():void{
    //console.log('form-> ',this.alumnoForm.value)
    this.obtenerValores()
  }
  
  obtenerValores():void{
    const mat=this.alumnoForm.get('matricula')?.value
    const nom=this.alumnoForm.get('nombre')?.value
    const ed=this.alumnoForm.get('edad')?.value
    const corr=this.alumnoForm.get('correo')?.value
    const pag=this.alumnoForm.get('pago')?.value
    const foto=this.alumnoForm.get('foto')?.value
    const cal=this.alumnoForm.get('calif')?.value
    this.nombre = nom;
    this.matricula =mat;
    this.edad = ed;
    this.correo = corr;
    this.pago = pag;
    this.foto = foto;
    this.calif = cal;
    console.log('Matricula:',mat)
    console.log('Nombre:',nom)
  }

  initForm():FormGroup{
    return this.fb.group({
      matricula:['',[Validators.required]],
      nombre:['',[Validators.required, Validators.minLength(3)]],
      edad:[''],
      correo:[''],
      pago:[''],
      foto:[''],
      calif:[''],
    })
  }
}
