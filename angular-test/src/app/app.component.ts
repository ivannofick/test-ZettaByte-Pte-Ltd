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
    public schoolData:any = []
  
    headElements = ['Student', 'School Origin', 'School Correcting', 'Cross Corector'];
    headElementsScholl = ['Schools', 'Students', 'Correctins', 'Diff'];
    constructor(
        private appSettingsService : AppService 
    ) { 
      this.getDataStudent();
      this.getDataTable();
    }

   ngOnInit(){
    
   }
  title = 'angular-test';


  getDataStudent() {
    this.appSettingsService.get("./assets/json-data/student-stable-list.json").subscribe((data:any) => {
        this.studentData =  data;
    });
  }
  

  getDataTable() {
    this.appSettingsService.get("./assets/json-data/school-table-list.json").subscribe((data:any) => {
        this.schoolData = data;
    });
  }
}


