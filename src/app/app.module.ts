import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlikrComponent } from './flikr/flikr.component';
import { CPanelInfoComponent } from './c-panel-info/c-panel-info.component';
import { RegisterSoftwareComponent } from './register-software/register-software.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogOverviewExampleDialogComponent } from './c-panel-info/c-panel-info.component';
import { FlikrService } from './flikr/flikr.service';

@NgModule({
  imports: 
  [ BrowserModule, 
  ReactiveFormsModule,
  MaterialModule,
  BrowserAnimationsModule,
  HttpClientModule ],

  declarations: 
  [ AppComponent,
  FlikrComponent,
  CPanelInfoComponent,
  RegisterSoftwareComponent,
  DialogOverviewExampleDialogComponent
  ],

  entryComponents: 
  [ DialogOverviewExampleDialogComponent ],

  bootstrap:  [ AppComponent ],
  providers: [ FlikrService ]
})
export class AppModule { }
