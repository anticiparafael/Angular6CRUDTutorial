import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(
    private adunitservice: AdunitService,
    private fb: FormBuilder,
    // private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required],
      unit_price: ['', [Validators.required, Validators.pattern('[0-9.]*')]],
      unit_currency_symbol: ['', Validators.required]
    });
  }

  addAdUnit() {
    try {
      const value = this.angForm.value;
      this.adunitservice.addAdUnit(value).then((response) => {
        // this.router.navigate[('/index')];
      });

    } catch (error) {
      console.log('We caught an error', error);
    }
  }
  ngOnInit() {
  }

}
