// process-instances.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-process-instances',
  templateUrl: './process-instances.component.html',
  styleUrls: ['./process-instances.component.scss']
})
export class ProcessInstancesComponent implements OnInit {
  description: string;
  id: string;
  instances: any[]; // Adjust the type to match the structure of your instances

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.description = params['description'];
      this.id = params['id'];
      this.loadInstances(this.id); // Pass the ID to the loadInstances method
    });
  }

  loadInstances(id: string) {
    const apiUrl = `http://10.2.2.90:9023/camunda/rest/instance/getinstance/${id}`;

    this.httpClient.get(apiUrl).subscribe((data: any[]) => {
      this.instances = data; // Assuming the response is an array of instances
    });
  }
}
