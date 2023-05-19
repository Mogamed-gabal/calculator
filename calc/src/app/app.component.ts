import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor()
 {

 }
 index:any;
  title = 'calc';
  result:string=''
ngOnInit():void
{

}

addValuesToScreen(num:any)
{
  this.result +=num
}
getResult()
{
    this.result=eval(this.result).toFixed(1)
}

clearScreen()
{
  this.result=''
}

  
}
