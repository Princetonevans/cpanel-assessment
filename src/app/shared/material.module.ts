import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule, MatCardModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  imports:      
  [
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatDialogModule,
  MatCardModule,
  MatSnackBarModule
  ],

  exports: 
  [
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatDialogModule,
  MatCardModule,
  MatSnackBarModule
  ],
})
export class MaterialModule { }