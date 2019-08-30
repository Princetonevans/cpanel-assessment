import { Component, OnInit } from '@angular/core';
import { FlikrService } from './flikr.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flikr',
  templateUrl: './flikr.component.html',
  styleUrls: ['./flikr.component.css']
})
export class FlikrComponent implements OnInit {

  data = [];
  constructor(private flikrService: FlikrService) { }

  ngOnInit() {
  }

  getPictures() {
    this.flikrService.getPictures()
    .subscribe(data => this.data = data);
  }
}