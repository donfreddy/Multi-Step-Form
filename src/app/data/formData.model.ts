export class FormData {
  firstName: string = '';
  lastName : string = '';
  email: string = '';
  cardNber: string = '';
  expDate: string = '';
  cvc: string = '';

  clear() {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.cardNber = '';
      this.expDate = '';
      this.cvc = ''
  }
}

export class Personal {
  firstName: string = '';
  lastName : string = '';
  email: string = '';
}

export class CardInfo {
  cardNber: string = '';
  expDate: string = '';
  cvc: string = '';
 }