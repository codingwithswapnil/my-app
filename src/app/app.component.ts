import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './User';

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
  activities: string[];
  books: any[];
  booksFlag: boolean;
  booksButtonText: string;
  addBooksFlag: boolean;
  addBooksButtonText: string;
  user: User;

  constructor(){
    this.user = new User();
    this.dateText = 'Hover on blue button to see the date.';
    this.buttonFlag = false;
    this.hobbies = ['Reading','Music','Coding'];
    this.defaultHobbies = ['Reading','Music','Coding'];
    this.hobbiesFlag = true;
    this.hobbyButtonText = 'hide hobbies';
    this.booksFlag = true;
    this.booksButtonText = 'Hide Books';
    this.books = [
      {id: 1, name: 'Test 1', auth: 'Auth 1', price: 10, class: 'success'},
      {id: 2, name: 'Test 2', auth: 'Auth 2', price: 20, class: 'warning'},
      {id: 3, name: 'Test 3', auth: 'Auth 3', price: 30, class: 'info'},
      {id: 4, name: 'Test 4', auth: 'Auth 4', price: 40, class: 'active'}
    ];
    this.addBooksFlag = false;
    this.addBooksButtonText = "Show add book form";
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

  viewbooks(){
    
    if(!this.booksFlag)
      this.booksButtonText = 'Hide Books';
    else
      this.booksButtonText = 'Show Books';
    this.booksFlag = !this.booksFlag;
  }

  deleteBook(i){
    this.books.splice(i,1);
  }

  resetBooks(){
    
  }

  addBook(){
    if(!this.addBooksFlag)
      this.addBooksButtonText = "Hide add book form";
    else
      this.addBooksButtonText = 'Show add book form';
    this.addBooksFlag = !this.addBooksFlag;
  }

  saveBookInfo(){
    this.books.push(
      this.user
    );

    // this.frmBooks.reset();
  }
}