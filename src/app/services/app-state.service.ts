import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public status : String = '';
  public errorMessage : String = '';
  constructor() { }
}
