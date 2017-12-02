import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkTableModule } from  '@angular/cdk/table';

import { AppComponent } from './app.component';
import { MyFirstPanelComponent } from './my-first-panel/my-first-panel.component';
import { CdkTableBasicExampleComponent } from './cdk-table-basic-example/cdk-table-basic-example.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstPanelComponent,
    CdkTableBasicExampleComponent
  ],
  entryComponents: [
    MyFirstPanelComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    PortalModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
