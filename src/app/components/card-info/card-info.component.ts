import { Component, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/data/formData.model';
import { FormDataService } from 'src/app/data/formData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  title = 'Payment Details';
  cardInfo: CardInfo;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.cardInfo = this.formDataService.getCardInfo();
    console.log('Address feature loaded!');

  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setCardInfo(this.cardInfo);
    return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
      // Navigate to the work page
      this.router.navigate(['/personal']);
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the result page
      this.router.navigate(['/result']);
    }
  }

}
