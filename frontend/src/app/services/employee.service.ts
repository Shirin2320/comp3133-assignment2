import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_URL = 'http://localhost:4000/graphql';

  getEmployees() {
    return axios.post(this.API_URL, {
      query: `
        {
          employees {
            id
            name
            email
            salary
          }
        }
      `
    });
  }

  getEmployee(id: string) {
    return axios.post(this.API_URL, {
      query: `
        {
          employee(id: "${id}") {
            id
            name
            email
            salary
          }
        }
      `
    });
  }
}
