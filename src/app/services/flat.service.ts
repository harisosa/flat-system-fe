import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlatService {

  private prefix = "flat"
  private getAllFlat = this.prefix
  private getAllFlatURL = environment.BACKEND_URL + this.getAllFlat
  
  private getSubmit = `${this.prefix}/submit`
  private getSubmitUrl = environment.BACKEND_URL + this.getSubmit
  constructor(private http : HttpClient) { }
  public GetAllFlat(){
    return this.http.get<any>(this.getAllFlatURL)
  }
  public Submit(flatForm : any){
    return this.http.post<any>(this.getSubmitUrl,flatForm)
  }
}
