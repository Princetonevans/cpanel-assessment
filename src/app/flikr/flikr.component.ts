import { Component, OnInit } from '@angular/core';
import { FlikrService } from './flikr.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flikr',
  templateUrl: './flikr.component.html',
  styleUrls: ['./flikr.component.css']
})
export class FlikrComponent implements OnInit {

  toggle = false;
  buttonText = 'Show Pictures';
  data = [];

  constructor(private flikrService: FlikrService) { }

  ngOnInit() {
  }

  getPictures() {
    this.toggle = !this.toggle;
    this.buttonText = this.toggle ? 'Hide Pictures' : 'Show Pictures';
    this.flikrService.getPictures()
    .subscribe(data => this.data = data);
  }
}