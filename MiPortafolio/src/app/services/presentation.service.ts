import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Presentation } from '../models/Presentation';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  private apiServerUrl=environment.apiBaseUrl;


  constructor(private http:HttpClient) { }

  public getPresentation():Observable<Presentation[]> {
    return this.http.get<Presentation[]>(`${this.apiServerUrl}/presentation`);
  }
  public addPresentation(presentation: Presentation): Observable<Presentation>{
    return this.http.post<Presentation>(
      `${this.apiServerUrl}/presentation`,
      presentation
    );
  }
  public updatePresentation(presentation:Presentation):Observable<Presentation>{
    return this.http.post<Presentation>(
      `${this.apiServerUrl}/presentation`,
      presentation
    );
  }
  public delatePresentation(presentationId:number):Observable<void>{
    return this.http.delete<void>(
      `${this.apiServerUrl}/presentation/${presentationId}`
    );
  }



   


  }

