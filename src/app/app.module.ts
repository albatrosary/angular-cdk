import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkTableModule } from  '@angular/cdk/table';

import { AppComponent } from './app.component';
import { MyFirstPanelComponent } from './my-first-panel/my-first-panel.component';
import { CdkTableBasicExampleComponent } from './cdk-table-basic-example/cdk-table-basic-example.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstPanelComponent,
    CdkTableBasicExampleComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent
  ],
  entryComponents: [
    MyFirstPanelComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    PortalModule,
    FormsModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
