import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/api-response';
import { Page } from '../interface/page';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly serverUrl: string = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) {}

  users$ = (
    name: string = '',
    page: number = 0,
    size: number = 10
  ): Observable<ApiResponse<Page>> =>
    this.http.get<ApiResponse<Page>>(
      `${this.serverUrl}?name=${name}&page=${page}&size=${size}`
    );
}
