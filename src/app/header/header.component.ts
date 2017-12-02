import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Hello World';

  constructor() { }

  ngOnInit() {
    setTimeout(_ => {
        this.title = 'Updated!';
    }, 5000);   
  }

}
