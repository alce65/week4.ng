import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Phone } from './phone';

const initialPhone: Phone = {
  phoneNumber: '',
  isCalling: false,
};

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  private phone$: BehaviorSubject<Phone> = new BehaviorSubject<Phone>(
    initialPhone,
  );

  constructor() {}

  getPhone() {
    return this.phone$.asObservable();
  }

  setPhoneNumber(value: string) {
    const phone = this.phone$.value;
    if (value === '') {
      phone.phoneNumber = '';
    } else if (phone.phoneNumber.length < 9) {
      phone.phoneNumber += value;
    }
    this.phone$.next(phone);
  }

  changeCalling() {
    const phone = this.phone$.value;
    phone.isCalling = !phone.isCalling;
    this.phone$.next(phone);
  }
}
