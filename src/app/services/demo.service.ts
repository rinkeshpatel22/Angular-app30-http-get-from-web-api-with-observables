import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
 private config: any;
  constructor(private configService: ConfigService, private http: HttpClient) { 
     this.configService.getConfig().subscribe(responseData => {
      this.config = responseData;
    });
  }

  public getEmployeeList(): any{
    let httpGetUrl = this.config["WEB_API_URL"] + "/Employee";
    return this.http.get(httpGetUrl);
  }
}
