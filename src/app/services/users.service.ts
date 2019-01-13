import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  selectedUser: User;
  readonly URL_USER = 'http://localhost:5555/users'

  constructor(private http: HttpClient) {
    this.selectedUser = new User();
  }

  getUsers() {
    return this.http.get(this.URL_USER);
  }

  getUser(id: string) {
    return this.http.get(this.URL_USER + `/${id}`);
  }

  postUser(user: User) {
    return this.http.post(this.URL_USER + '/signup', user);
  }

  /** Not implemented at backend **/
  /*putUser(user: User) {
    return this.http.put(this.URL_USER + `/${user._id}`, user);
  }*/

  deleteUser(id: string) {
    return this.http.delete(this.URL_USER + `/${id}`);
  }
}
