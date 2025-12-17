import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import CryptoJs from "crypto-js";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private static BASE_URL = 'http://localhost:4200/api';
  private static ENCRPTION_KEY = "MY-encrption key"

  constructor(private http:HttpClient) { }
}
