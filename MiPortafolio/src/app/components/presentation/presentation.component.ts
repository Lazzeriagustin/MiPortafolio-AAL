import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Presentation } from 'src/app/models/Presentation';
import { PresentationService } from 'src/app/services/presentation.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  public presentation:Presentation[]=[];
  public editPresentation:Presentation | undefined;
  public deletePresentation:Presentation | undefined;

  constructor(private presentationService:PresentationService)
   { }

  ngOnInit(): void {
    this.getPresentation();

  }

  public getPresentation():void{
    this.presentationService.getPresentation().subscribe({
      next:(Response: Presentation[]) =>{
        this.presentation=Response;

      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }

}
