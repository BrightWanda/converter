import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-name-editor',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit{
  form: FormGroup;

  celcius = new FormControl('');
  fahrenheit = new FormControl('');

  kilometer = new FormControl('');
  mile = new FormControl('');

  kilogram = new FormControl('');
  pound = new FormControl('');

  squareMeter = new FormControl('');
  squareFeet = new FormControl('');

  litre = new FormControl('');
  gallon = new FormControl('');

  public show: boolean = true;

  constructor(public fb: FormBuilder, private http: HttpClient) {
      this.form = this.fb.group({
      name: ['']
    });
  }

  ngOnInit() { }

  updateName() {
    this.celcius.setValue('');
    this.fahrenheit.setValue('');

    this.kilometer.setValue('');
    this.mile.setValue('');

    this.kilogram.setValue('');
    this.pound.setValue('');

    this.squareMeter.setValue('');
    this.squareFeet.setValue('');

    this.litre.setValue('');
    this.gallon.setValue('');
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append("value", this.form.get('celcius')!.value);
    formData.append("unit", "C");
    formData.append("metric", "temp");

    this.http.get('http://localhost:8081/metric-converter/api/converter/get-all-metrics').subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
