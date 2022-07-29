import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from 'src/app/material/material.module';
import { TableComponent } from './table/table.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { QrFormComponent } from './qr-form/qr-form.component';
import { FlashyAccordionComponent } from './flashy-accordion/flashy-accordion.component';
import { CardsComponent } from './cards/cards.component';
import { BrowserModule } from '@angular/platform-browser';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    TableComponent,
    ConfirmationDialogComponent,
    InputSearchComponent,
    DatepickerComponent,
    QrFormComponent,
    FlashyAccordionComponent,
    CardsComponent,
    SnackbarComponent,
    CarouselComponent,
  ],
  exports: [
    TableComponent,
    ConfirmationDialogComponent,
    InputSearchComponent,
    DatepickerComponent,
    QrFormComponent,
    FlashyAccordionComponent,
    CardsComponent,
    SnackbarComponent,
    CarouselComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})

export class ComponentModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}