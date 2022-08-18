import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material';

/**
 * @title Basic slide-toggles
 */
@Component({
  selector: 'slide-toggle-overview-example',
  templateUrl: 'slide-toggle-overview-example.html',
  styleUrls: ['slide-toggle-overview-example.css'],
})
export class SlideToggleOverviewExample {
    isChecked = true;
  formGroup: FormGroup;
  toggle1:boolean=false;
  checkedToggle: boolean = false;

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      enableWifi: false,
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  onFormSubmit(formValue: any) {
    alert(JSON.stringify(formValue, null, 2));
  }


  public toggle(event: MatSlideToggleChange) {
    console.log("toggle", event.checked)
    this.toggle1= event.checked
  //   if (event.checked) {
    
  // }
}
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */