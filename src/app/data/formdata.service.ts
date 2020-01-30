import { Injectable } from '@angular/core';

import { FormData, Personal, CardInfo } from './formData.model'
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  personal: Personal;
  cardInfo: CardInfo;

  private formData: FormData = new FormData();
  private isPersonalFormValid: boolean = false;
  private isCardInfoFormValid: boolean = false;

  constructor(private workflowService: WorkflowService) { }

  getPersonal(): Personal {
    
    this.personal = {
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      email: this.formData.email
    };
    return this.personal;
  }

  setPersonal(data: Personal) {

    this.isPersonalFormValid = true;
    this.formData.firstName = data.firstName;
    this.formData.lastName = data.lastName;
    this.formData.email = data.email;

    this.workflowService.validateStep(STEPS.personal);
  }
  
  getCardInfo(): CardInfo {
    this.cardInfo = {
      cardNber: this.formData.cardNber,
      expDate: this.formData.expDate,
      cvc: this.formData.cvc
    };
    return this.cardInfo;
  } 

  setCardInfo(data: CardInfo){ 

    this.isCardInfoFormValid = true;
    this.formData.cardNber = data.cardNber;
    this.formData.expDate = data.expDate;
    this.formData.cvc = data.cvc;

    this.workflowService.validateStep(STEPS.cardInfo);
  }

  getFormData(): FormData {
    return this.formData;
  } 
  
  resetFormData(): FormData {

    this.workflowService.resetSteps();

    this.formData.clear();
    this.isPersonalFormValid = this.isCardInfoFormValid = false;
    return this.formData;
    
  }

  isFormValid() {
    return this.isPersonalFormValid && this.isCardInfoFormValid; 
  }
}
