import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ AppService ]
})
export class AppComponent {
    constructor(
        private appSettingsService : AppService 
    ) { }

   ngOnInit(){
       this.appSettingsService.getJSON().subscribe(data => {
            console.log(data);
        });
   }
  title = 'angular-test';
}
