import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css'],
})
export class EuComponent implements OnInit {
  data: any = [];
  description: any = [];
  
  constructor(dS: DataService) { 
    this.data = dS.getData();
    this.description = dS.getDescription();
  }

  ngOnInit(): void {
  }

}
