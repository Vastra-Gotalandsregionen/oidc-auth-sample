import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { ProtectedService } from '../protected.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  values: string[];
  error: string;

  get claims(): string[] {
    if (!this.authService.user || !this.authService.user.profile) {
      return [];
    }

    const claimsArr = [];
    for (const claim of Object.keys(this.authService.user.profile)) {
      claimsArr.push(`${claim}: ${this.authService.user.profile[claim]}`);
    }

    return claimsArr;
  }

  constructor(private authService: AuthService, private protectedService: ProtectedService) { }

  ngOnInit(): void {
    this.protectedService.getValues()
      .subscribe(
        value => this.values = value,
        error => this.error = error
      );
  }

}
