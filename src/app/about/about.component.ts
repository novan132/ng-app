import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {}
  param: any;
  queryParam: any;

  ngOnInit(): void {
    this.param = this.activateRoute.snapshot.params['username'];
    this.queryParam = this.activateRoute.snapshot.queryParams['lastname'];
  }
}
