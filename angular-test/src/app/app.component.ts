import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ AppService ]
})
export class AppComponent {
    public studentData:any = []
  
    headElements = ['Student', 'School Origin', 'School Correcting', 'Cross Corector'];
    constructor(
        private appSettingsService : AppService 
    ) { 
      this.getDataStudent();
    }

   ngOnInit(){
    
   }
  title = 'angular-test';


  getDataStudent() {
    this.appSettingsService.get("./assets/json-data/student-stable-list.json").subscribe((data:any) => {
        this.studentData =  data;
    console.log(this.studentData);

    });
  }
  

  getDataTable() {
    return this.appSettingsService.get("./assets/json-data/school-table-list.json").subscribe(data => {
        return data;
    });
  }
}


