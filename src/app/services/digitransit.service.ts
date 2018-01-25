import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DigitransitService {

  apiUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  constructor(private http: HttpClient) { }

  getRoutes(stopName) {
    const body = `{
                    stops(name: "${stopName}") {
                      name
                      patterns {
                        name
                        route {
                          shortName
                          longName
                        }
                        directionId
                      }
                    }
                  }`;

    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/graphql')
    };

    interface StopData {
      stops: string[];
    }

    interface Responsedata {
      data: StopData;
    }

    return this.http.post<Responsedata>(this.apiUrl, body, settings);
    //return this.http.post(this.apiUrl, body, settings);
  }

}
