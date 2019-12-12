import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
    declarations: [
        AppComponent,
        ModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    entryComponents: [
        ModalComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
