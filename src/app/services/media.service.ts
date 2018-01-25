import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MediaService {

  test = 'Howdiduudi';
  apiURL = 'http://media.mw.metropolia.fi/wbma';
  mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/'

  constructor(private http: HttpClient) {
  }

  getAllMedia() {
    return this.http.get(this.apiURL + '/media');
  }

}
