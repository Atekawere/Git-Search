import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = "069a8764f4c2325620e7";
  private clientsecret = "7ebf37d0beb88e14bc9d40735a43309a3d5c44d7";

  constructor( private http:HttpClient) {
    console.log("service is now ready!");
    this.username = "Atekawere";

   }
   getprofileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + 
     "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    //  .map(res=>res.json());
   }
}
