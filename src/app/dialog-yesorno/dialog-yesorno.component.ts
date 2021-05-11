import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tododata } from '../Model/tododata';

@Component({
  selector: 'app-dialog-yesorno',
  templateUrl: './dialog-yesorno.component.html',
  styleUrls: ['./dialog-yesorno.component.css']
})
export class DialogYesornoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,private _snackBar: MatSnackBar,
    @Inject (MAT_DIALOG_DATA, ) public msg:any) {}
  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close("Thanks for using me!");
  }

  yes(){


    this.ngOnInit();
    this.dialogRef.close("yes");
  }

  no(){   
  this.ngOnInit();
  this.dialogRef.close("no");
}
  openSnackBar(message: string, action: string) {
    this._snackBar.open('Content Copied', '✔️', {
      duration: 2000,
    });
  }
}
