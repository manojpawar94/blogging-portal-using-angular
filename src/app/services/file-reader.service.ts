import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { ServiceUtils } from './service.utils';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  rootpath: string = "assets/blogs"

  constructor(private http: HttpClient) { }

  fetchContent(filename: string) {
    return this.http.get(`${this.rootpath}${filename}`, { responseType: 'text' })
  }

  fetchTextContent(filename: string) {
    return fetch(`assets/blogs/golangs/01_Introduction_to_Go_Language.md`)
      .then(response => response.text())
  }
}
