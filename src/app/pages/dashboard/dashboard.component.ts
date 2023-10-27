import { Component, OnInit } from '@angular/core';
import { ProcessService } from '@services/process.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  processId: string;
  httpClient: any;
  instances: any[];

  constructor(
    private processService: ProcessService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getAllProcesses();
    this.processService.getAllProcesses().subscribe((data: any) => {
      this.processId = data.Id; // Assign the processId from the response
    });
  }

  getAllProcesses() {
    this.processService.getAllProcesses().subscribe(
      (data: any) => {
        this.data = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  navigateToProcessInstance(description: string, id: string, instances: number) {
    if (instances > 0) {
      this.router.navigate(['/process-instance', id, description]);
    } else {
      // Handle the case where instances are 0, e.g., show a message to the user or take a different action.
    }
  }
  startProcess(key: string) {
    this.processService.startProcess(key).subscribe(
      (instances: any[]) => {
        this.instances = instances; 
      },
      (error) => {
        console.error("Error starting process:", error);
      }
    );
  }

}

  


