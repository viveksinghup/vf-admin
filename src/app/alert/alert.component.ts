import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  closeAlert() {
    // this.alert.nativeElement.classList.remove('show');
  }

  constructor() { }

  ngOnInit() {
  }

}
