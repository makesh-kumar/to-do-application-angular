import { ApiCallerService } from './../api-caller.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tododata } from '../Model/tododata';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,private _snackBar: MatSnackBar,
    @Inject (MAT_DIALOG_DATA, ) public data: Tododata , private api: ApiCallerService) {}
  ngOnInit(): void {
  }
  close() {
    this.ngOnInit();
    this.dialogRef.close("Thanks for using me!");
  }


  update(data: Tododata){

    

if(data.title === undefined || data.title.trim().length === 0){
  this._snackBar.open('Title cant be empty !', '❌', {
    duration: 2000,
  });
}
else if(data.content === undefined || data.content.trim().length === 0){
  this._snackBar.open('Notes cant be empty !', '❌', {
    duration: 2000,
  });
}
else{
this.api.addData(this.data).subscribe();
this.openSnackBar();
this.close();
}

  }
  openSnackBar() {
    this._snackBar.open('Note Updated', '✔️', {
      duration: 2000,
    });
  }

}
