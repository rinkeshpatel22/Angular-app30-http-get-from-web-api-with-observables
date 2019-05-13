import { Component } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public employeeList: any;
  constructor(private demoService: DemoService){  }

  private getEmployeeList(): void {
    this.demoService.getEmployeeList()
      .subscribe((data) => {
        this.employeeList = data;
      });
  }
}
