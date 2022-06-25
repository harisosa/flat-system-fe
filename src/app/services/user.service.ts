import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private prefix = "user"
  private getAllUser = this.prefix
  private getAllUserURL = environment.BACKEND_URL + this.getAllUser

  private submit = `${this.prefix}/submit`
  private submitURL = environment.BACKEND_URL + this.submit

  private remove = `${this.prefix}/remove`
  private removeURL = environment.BACKEND_URL + this.remove

  constructor(private http : HttpClient) { }
  public GetAllUser() {
    return this.http.get<any>(this.getAllUserURL)
  }

  public submitUser(userForm : any){
    if (!userForm.id){
      delete userForm['id']
    }
    return this.http.post<any>(this.submitURL,userForm)
  }

  public removeUser(id :string){

    return this.http.delete<any>(`${this.removeURL}/${id}`)
  }

}
