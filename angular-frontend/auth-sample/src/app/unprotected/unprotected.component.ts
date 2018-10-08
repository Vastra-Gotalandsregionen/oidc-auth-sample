import { Component, OnInit } from '@angular/core';

import { UnprotectedService } from '../unprotected.service';

@Component({
  selector: 'app-unprotected',
  templateUrl: './unprotected.component.html',
  styleUrls: ['./unprotected.component.css']
})
export class UnprotectedComponent implements OnInit {

  values: string[];
  error: string;

  constructor(private unprotectedService: UnprotectedService) { }

  ngOnInit(): void {
    this.unprotectedService.getValues()
      .subscribe(
        value => this.values = value,
        error => this.error = error
      );
  }

}
