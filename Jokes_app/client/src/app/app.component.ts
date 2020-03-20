import { Component } from '@angular/core';
import { GetJokesService } from '../services/get-jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jokes:object = {};
  errMsg:string = "";
  jokeToBeDisplayed = "";
  punchlineToBeDisplayed = "";
  jokesArr = [];
  counter = 0;
  isPunchline: boolean = false;

  //Injecting service in constructor
  constructor(private getJokes: GetJokesService){}

  //Using service to fetch data and initial setup
  getJokesFromService(){
    this.getJokes.getJokes().subscribe(
      data => {
        this.jokes = data;
        console.log("jokes-->"+Object.values(this.jokes));
        if(this.jokes["data"]){
          this.jokesArr = this.jokes["data"];

          //Removing duplicates if any
          for(let i=0;i<this.jokesArr.length-1;i++){
            for(let j=i+1;j<this.jokesArr.length;j++){
              if(this.jokesArr[i]["id"]==this.jokesArr[j]["id"]){
                this.jokesArr.splice(j,1);
              }
            }
          }
          
          console.log("Jokes array -->",this.jokesArr);
          this.jokeToBeDisplayed = this.jokesArr[this.counter]["setup"];
          console.log("jokeToBeDisplayed-->",this.jokeToBeDisplayed);
        }
      },
      err => this.errMsg = err.message
    );
  }

  ngOnInit(){
    this.getJokesFromService();
  }

  //Display punchline if user clicks display punchline
  displayPunchline(){
    this.isPunchline = true;
    this.punchlineToBeDisplayed = this.jokesArr[this.counter]["punchline"];
  }

  //Display next joke when user clicks display another joke
  displayAnotherJoke(){
    console.log("HI");
    let lengthOfArr = this.jokesArr.length;
    console.log("length -->",lengthOfArr);
    if(this.counter + 1 == lengthOfArr){
      this.counter = 0;
    }
    else{
      this.counter = this.counter + 1;
    }
    this.jokeToBeDisplayed = this.jokesArr[this.counter]["setup"];
    this.punchlineToBeDisplayed = "";
    this.isPunchline = false;
  }


}
