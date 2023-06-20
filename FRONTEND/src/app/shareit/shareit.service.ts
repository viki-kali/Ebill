import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareitService {
  key!:string;
  readid!:string;
  constructor() { }
  setkey(data:any){
    this.key=data;
  }
  getkey()
  {
    return this.key;
  }
  setrid(data:any){
    this.readid=data;
  }
  getrid()
  {
    return this.readid;
  }
}
