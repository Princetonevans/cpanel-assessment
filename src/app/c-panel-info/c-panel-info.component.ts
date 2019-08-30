import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-c-panel-info',
  templateUrl: './c-panel-info.component.html',
  styleUrls: ['./c-panel-info.component.css']
})
export class CPanelInfoComponent {

  toggle = false;
  buttonText = 'Find out more';

  constructor(public dialog: MatDialog) { }


  toggleModal() {
    this.toggle = !this.toggle;
    this.buttonText = this.toggle ? 'Close Modal' : 'Find out more';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '400px',
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}