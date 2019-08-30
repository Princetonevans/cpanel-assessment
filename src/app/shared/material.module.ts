import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  imports:      [MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule, MatDialogModule ],
  exports: [MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule, MatDialogModule],
})
export class MaterialModule { }