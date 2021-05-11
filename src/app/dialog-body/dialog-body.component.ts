import { Tododata } from './../Model/tododata';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  // constructor( public dialogRef: MatDialogRef<DialogBodyComponent>){}
  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,private _snackBar: MatSnackBar,
    @Inject (MAT_DIALOG_DATA, ) public data: Tododata) {}
  ngOnInit(): void {
    this.data.content.replace('/n','<br>');
  }
  close() {
    this.dialogRef.close("Thanks for using me!");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open('Content Copied', '✔️', {
      duration: 2000,
    });
  }

}
