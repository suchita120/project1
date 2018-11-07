import { Component, OnInit } from '@angular/core';
import { GitHubService } from './github.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user;
  followers;
  constructor(private githubService: GitHubService ){}



  ngOnInit()
  {

        //  this.githubService.getFollowers(this.users)
        //       .subscribe((data) => {
        //         this.users = data;
        //       });
  }

  Search(x){
    this.githubService.getUser(x)
         .subscribe((data) => {
           this.user = data;
           
         });
         this.githubService.getFollowers(x).subscribe(item => {
           this.followers = item;
           console.log(this.followers);
         })

  }
}
