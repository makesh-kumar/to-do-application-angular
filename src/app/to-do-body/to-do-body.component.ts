import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiCallerService } from '../api-caller.service';
import { ITododata } from '../Model/tododata';

@Component({
  selector: 'app-to-do-body',
  templateUrl: './to-do-body.component.html',
  styleUrls: ['./to-do-body.component.less'],
})
export class ToDoBodyComponent implements OnInit {
  constructor(
    private router: Router,
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar,
    private apiService: ApiCallerService,
    private formBuilder: FormBuilder
  ) {}
  public viewData: ITododata[] = [];
  public savedData: ITododata[] = [];
  public toDoData: ITododata;
  public showAddSection: boolean;
  public showViewSection: boolean;
  public toDoForm: FormGroup;
  public isToDoListEmpty: boolean;

  public selectedToDo: ITododata;
  ngOnInit(): void {
    // if (localStorage.length === 0) {
    //   this.router.navigate(['/login']);
    // }
    this.showAddSection = true;
    this.initToDoForm();
    this.getData();
  }

  toggleView() {
    if (this.showViewSection) {
      this.showViewSection = false;
      this.showAddSection = true;
    } else if (this.showAddSection) {
      this.showViewSection = true;
      this.showAddSection = false;
    }
  }

  showAdd() {
    this.initToDoForm();
    this.showAddSection = true;
    this.showViewSection = false;
  }
  showView() {
    this.getData();
    this.showViewSection = true;
    this.showAddSection = false;
  }

  downloadInnerHtml(data: ITododata) {
    const link = document.createElement('a');
    link.setAttribute('download', data.title);
    link.setAttribute(
      'href',
      'data:' +
        'text/plain' +
        ';charset=utf-8,' +
        encodeURIComponent(data.content)
    );
    link.click();
    this._snackBar.open('Download started !', '✔️', {
      duration: 2000,
    });
  }

  getData() {
    this.viewData = [...this.viewData];

    // this.isToDoListEmpty = true;
    // this.apiService
    //   .getData(localStorage.getItem('userid'))
    //   .subscribe((data) => {
    //     this.viewData = data;
    //     if(this.viewData.length === 0){  this.isToDoListEmpty = true;}
    //     else{ this.isToDoListEmpty = false}
    //   });
  }

  addToDo() {
    if (this.toDoForm.valid) {
      this.toDoData = {
        userId: 'test',
        dataId: Math.floor(Math.random() * 1000 + 1),
        content: this.toDoForm.controls.description.value,
        title: this.toDoForm.controls.title.value,
        dtm:
          new Date().getDate() +
          '/' +
          (new Date().getMonth() + 1) +
          '/' +
          new Date().getFullYear() +
          ' || ' +
          new Date().toLocaleTimeString(),
      };
      this.viewData = [...this.viewData, this.toDoData];
      // this.savedData = [...this.savedData, this.toDoData];
      console.log(this.viewData);
      this._snackBar.open('Notes saved sucessfully !', '✔️', {
        duration: 2000,
      });
      this.initToDoForm();

      // API issue
      // this.apiService.addData(this.toDoData).subscribe(
      //   (response) => {
      //     if (response) {
      //       this._snackBar.open('Notes saved sucessfully !', '✔️', {
      //         duration: 2000,
      //       });
      //       this.initToDoForm();
      //       this.getData();
      //     } else {
      //       this._snackBar.open('Error Occured while saving !', '❌', {
      //         duration: 2000,
      //       });
      //     }
      //   },
      //   (error) => {
      //     if (error) {
      //       this._snackBar.open('Notes saved sucessfully !', '✔️', {
      //         duration: 2000,
      //       });
      //       this.initToDoForm();
      //       this.getData();
      //     } else {
      //       this._snackBar.open('Error Occured while saving !', '❌', {
      //         duration: 2000,
      //       });
      //     }
      //   }
      // );
    } else {
      this._snackBar.open('Please enter all fields !', '❌', {
        duration: 2000,
      });
    }
  }

  initToDoForm() {
    this.toDoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  showConfirmDelete(toDo: ITododata) {
    this.selectedToDo = toDo;
  }
  deleteToDo() {
    this.viewData = this.viewData.filter((data) => {
      return this.selectedToDo.dataId !== data.dataId;
    });

    // API issue
    // this.apiService.deleteData(this.selectedToDo).subscribe(
    //   (response) => {
    //     this._snackBar.open('Notes deleted sucessfully !', '✔️', {
    //       duration: 2000,
    //     });
    //     this.getData();
    //   },
    //   (err) => {
    //     this._snackBar.open('Notes deleted sucessfully !', '✔️', {
    //       duration: 2000,
    //     });
    //     this.getData();
    //   }
    // );
  }
  copyContent() {
    this._snackBar.open('Copied to clipboard !', '✔️', {
      duration: 2000,
    });
  }
  showInfo(info: string) {
    this._snackBar.open('Created on ' + info, '✔️', {
      duration: 2000,
    });
  }
}
