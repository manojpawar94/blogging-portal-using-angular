import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { GithubFile } from '../beans/github.beans';
import { ServiceUtils } from './service.utils';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  owner = "manojpawar94"
  repo = "goprogramminghub-posts"
  branch = "main"

  constructor(private http: HttpClient) { }

  fetchListOfPost(topic: string): Observable<GithubFile[]> {
    return this.http.get<GithubFile[]>(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/${topic}?ref=${this.branch}`)
      .pipe(retry(1), catchError(ServiceUtils.handleError))
  }

  fetchContent(url : string): Observable<string> {
    return this.http.get<string>(url)
    .pipe(retry(1), catchError(ServiceUtils.handleError))
  }
}
