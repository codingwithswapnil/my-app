import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Swapnil\'s Web page';
  dateText:string;
  buttonFlag:boolean;
  hobbiesFlag:boolean;
  hobbies: string[];
  hobbyButtonText:string;
  defaultHobbies: string[];

  constructor(){
    this.dateText = 'Hover on blue button to see the date.';
    this.buttonFlag = false;
    this.hobbies = ['Reading','Music','Coding'];
    this.defaultHobbies = ['Reading','Music','Coding'];
    this.hobbiesFlag = true;
    this.hobbyButtonText = 'hide hobbies';
  }

  buttonClick(){
    this.buttonFlag = true;
  }

  closeClick(){
    this.buttonFlag = false;
  }

  mouseOver(){
    this.dateText = new Date().toString();
  }

  mouseOut(){
    this.dateText = 'Hover on blue button to see the date';
  }

  addHobby(){
    this.hobbies.push('New Hobby');
    // this.hobbies.unshift('New Item');
  }
  
  resetHobby(){
    this.hobbies = this.defaultHobbies;
  }
  
  deleteHobby(i){
    this.hobbies.splice(i,1);
  }

  hobbyClick(){
    if(!this.hobbiesFlag){
      this.hobbiesFlag = true;
      this.hobbyButtonText = 'hide hobbies';
    }
    else{
      this.hobbiesFlag = false;
      this.hobbyButtonText = 'show hobbies';  
    }
  }
}