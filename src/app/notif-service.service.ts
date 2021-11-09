import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotifServiceService {
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { 
  
  }
  addPushSubscriber(sub: any) {
    console.log(sub);
    
    return this.http.post<any>('localhost:4000/subscribe', sub).subscribe();

  }
}

