import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';

import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ApiService } from './services/api.service';
import { ModalComponent } from './components/modal/modal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    hits: MatTableDataSource<any>;
    displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];

    constructor(private apiService: ApiService, private matDialog: MatDialog) {

    }

    ngOnInit() {
        this.hits = new MatTableDataSource([]);
        this.hits.filterPredicate = function (table_data: any, filter: string): boolean {
            return table_data.title.toLowerCase().includes(filter);
        };

        timer(0, 10000).pipe(
            switchMap(() => this.apiService.getData())
        ).subscribe((data) => {
            this.hits = new MatTableDataSource(data.hits);
        }, (error) => {
            console.error(error);
        });
    }

    openDialog(row: any) {
        this.matDialog.open(ModalComponent, {
            width: '700px',
            data: row
        });
    }

    applyFilter(filterkey: string) {
        this.hits.filter = filterkey.trim().toLowerCase();
    }
}
