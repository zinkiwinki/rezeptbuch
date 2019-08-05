import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerText;

  constructor(private route: ActivatedRoute, private location: Location) { }

  
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
  }  

}
