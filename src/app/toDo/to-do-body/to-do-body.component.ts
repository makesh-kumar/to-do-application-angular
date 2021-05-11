import { ApiCallerService } from './../../api-caller.service';
import { Tododata } from './../../Model/tododata';
import { Router } from '@angular/router';
import { DialogBodyComponent } from './../../dialog-body/dialog-body.component';
import { PractiseComponent } from './../../practise/practise.component';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-to-do-body',
  templateUrl: './to-do-body.component.html',
  styleUrls: ['./to-do-body.component.css']
})
export class ToDoBodyComponent implements OnInit {


  constructor(private matDialog: MatDialog ,
    private _snackBar: MatSnackBar,   private title: Title,private router:Router,private api:ApiCallerService, private localStorage: LocalStorage) {}
  data: Tododata;
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = "makesh kumar";
    let dialogRef =  this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {


    });
  }

   alphas:string[] = ["1","2","3","4","5","6","7"];


  ngOnInit(): void {
    if (localStorage.length === 0) {
      this.router.navigate(['/login']);
    }
    this.title.setTitle('ToDo-Home');
    this.data = new Tododata();
  }
  add(){

    
    this.router.navigateByUrl('/add');
  }

  view(){
    this.router.navigateByUrl('/view');
  }

  addData(){
    if(this.data.title=== undefined || this.data.title.trim().length === 0){
      this._snackBar.open('Title cant be empty !', '❌', {
        duration: 2000,
      });
    }
    else if(this.data.content=== undefined || this.data.content.trim().length === 0)
    {
      this._snackBar.open('Notes cant be empty !', '❌', {
        duration: 2000,
      });

    }
    else{
    this.data.dataId = Math.floor((Math.random() * 1000) + 1);
    this.data.userId  = localStorage.getItem('userid');
    this.data.dtm = new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()+" || "+new Date().toLocaleTimeString();
this.api.addData(this.data).subscribe(
  data=>{

  }
);

this.openSnackBar();
    }
  }

  openSnackBar() {
    this._snackBar.open('Note Added', '✔️', {
      duration: 2000,
    });
    // this.ngOnInit();
    this.router.navigateByUrl('/view');
  }

}
