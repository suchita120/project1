import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GitHubService} from './github.services';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
