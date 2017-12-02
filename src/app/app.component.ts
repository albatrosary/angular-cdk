import { ApplicationRef, ComponentFactoryResolver, Component, OnInit, Injector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DomPortalHost, Portal, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('testTemplate') testTemplate: TemplateRef<any>;
  private portalHost: DomPortalHost;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit() {
    // Create a portalHost from a DOM element
    this.portalHost = new DomPortalHost(
      document.querySelector('#pageHeader'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    // Create a template portal
    const templatePortal = new TemplatePortal(
      this.testTemplate, 
      this.viewContainerRef, 
      {$implicit: 'Bob'},
      );

    // Attach portal to host
    this.portalHost.attach(templatePortal);
  }
}