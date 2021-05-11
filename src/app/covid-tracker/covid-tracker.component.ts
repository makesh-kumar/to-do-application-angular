import { MatTableModule, MatTableDataSource } from '@angular/material/table';

import { ApiCallerService } from './../api-caller.service';
import { Country } from './../Model/country';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';




@Component({
  selector: 'app-covid-tracker',
  templateUrl: './covid-tracker.component.html',
  styleUrls: ['./covid-tracker.component.css']
})

export class CovidTrackerComponent implements OnInit {


  tim: string;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private serv:ApiCallerService,
    private title: Title,private router: Router, ) { }
  ELEMENT_DATA : Country[];
  displayedColumns: string[] = ['country','cases','todayCases','deaths','todayDeaths','recovered',
  'active','casesPerOneMillion','deathsPerOneMillion','tests'];
  // dataSource = this.ELEMENT_DATA;
dataSource = new MatTableDataSource<Country>(this.ELEMENT_DATA);

  ngOnInit(): void {




    this.title.setTitle('Covid-Tracker');

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getReports();
  }

  public getReports(){
    this.serv.getCovidResult().subscribe(
      report =>{
        this.tim = report[0].updated;

        
        this.dataSource.data = report as Country[];
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}