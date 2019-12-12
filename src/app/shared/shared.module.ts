import { NgModule } from '@angular/core';
import { MatTableModule, MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [
        MatTableModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule
    ],
    exports: [
        MatTableModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class SharedModule { }
