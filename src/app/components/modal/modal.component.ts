import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    jsonStr = '';

    constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        console.log(this.data);
        this.jsonStr = JSON.stringify(this.data);
    }

    ngOnInit() {

    }

    onCloseClick() {
        this.dialogRef.close();
    }

}
