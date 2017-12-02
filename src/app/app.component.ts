import { Component, OnInit, ViewChild } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MyFirstPanelComponent } from './my-first-panel/my-first-panel.component';
import { CdkPortal } from '@angular/cdk/portal';
import { OverlayConfig } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
}