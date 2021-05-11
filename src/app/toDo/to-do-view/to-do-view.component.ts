import { DialogEditComponent } from './../../dialog-edit/dialog-edit.component';
import { Tododata } from './../../Model/tododata';
import { ApiCallerService } from './../../api-caller.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from 'src/app/dialog-body/dialog-body.component';
import { DialogYesornoComponent } from 'src/app/dialog-yesorno/dialog-yesorno.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-to-do-view',
  templateUrl: './to-do-view.component.html',
  styleUrls: ['./to-do-view.component.css']
})
export class ToDoViewComponent implements OnInit {


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private matDialog: MatDialog, private title: Title,private router:Router, private api: ApiCallerService,private _snackBar: MatSnackBar) {}
  p: number = 1;
  // collection: any[] = someArrayOfThings;
  viewData: Tododata[];
  tempData: Tododata[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  searchVal:string;
  empty:boolean;
  openDialog(dt: Tododata) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data =dt;
    let dialogRef =  this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {


    });
  }
  openDialogEdit(dt: Tododata){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data =dt;
    let dialogRef =  this.matDialog.open(DialogEditComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      this.ngOnInit();


    });
  }

   alphas:string[] = ["1","2","3","4","5","6","7"];


  ngOnInit(): void {
    if (localStorage.length === 0) {
      this.router.navigate(['/login']);
    }
    this.title.setTitle('ToDo-View');
    this.empty = false;
    this.getData();
    this.getData();
    this.getData();
  }

ngOnChanges(changes: SimpleChanges): void {



}


chg(){


if(this.searchVal ===  undefined || this.searchVal === "" || this.searchVal.trim().length === 0){


this.viewData = this.tempData;
}
else{


  this.viewData = this.tempData;
  // this.viewData = this.viewData.filter(p=>p.title.startsWith(this.searchVal));
  this.viewData = this.viewData.filter(p=>p.title.toLocaleLowerCase().startsWith(this.searchVal.toLocaleLowerCase()));
}
}


  add(){
    this.router.navigateByUrl('/add');
  }

  view(){
    this.router.navigateByUrl('/view');
  }

  getData(){
    this.api.getData(localStorage.getItem('userid')).subscribe(
      data =>{
        this.viewData = data;
        this.tempData = data;
        if(this.viewData.length == 0) this.empty = true;
      }
    );


  }


  openDialogDelete(data: Tododata){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = "Are you sure ?"
    let dialogRef =  this.matDialog.open(DialogYesornoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {


      this.ngOnInit();
      if(value === 'yes'){
        this.api.deleteData(data).subscribe();
          this.deleteSnack();
         this.ngOnInit();
         this.ngOnInit();
         this.ngOnInit();
      }
      else{

      }


    });
  }
  deleteSnack() {
    this._snackBar.open('Note Deleted', '✔️', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
