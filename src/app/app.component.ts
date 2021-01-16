import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intern-assignment';

  givenindex : number

finalnumber : number

  number(event)
  {
    this.givenindex  = event.target.value
  }

  final(){
    if(this.givenindex%2==0){
      this.finalnumber=(this.givenindex*this.givenindex)-1
    }
    else{
      this.finalnumber=(this.givenindex*this.givenindex)+1

    }




  }



}
