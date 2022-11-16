import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from "@angular/router";

import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


    ngOnInit(): void {
      history.pushState(null, '');
    }



}

