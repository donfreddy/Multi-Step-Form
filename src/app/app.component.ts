import { Component, Input, OnInit } from '@angular/core';
import { FormDataService } from './data/formData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'step-form';
  @Input() formData;

  constructor(private myService: FormDataService) { }

  ngOnInit() {
    this.formData = this.myService.getFormData();
    console.log(this.title + ' chargé !');
  }
}
