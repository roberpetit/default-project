import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from 'src/app/material/material.module';
import { TableComponent } from './table/table.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { QrFormComponent } from './qr-form/qr-form.component';
import { FlashyAccordionComponent } from './flashy-accordion/flashy-accordion.component';

@NgModule({
  declarations: [
    TableComponent,
    ConfirmationDialogComponent,
    InputSearchComponent,
    DatepickerComponent,
    QrFormComponent,
    FlashyAccordionComponent
  ],
  exports: [
    TableComponent,
    ConfirmationDialogComponent,
    InputSearchComponent,
    DatepickerComponent,
    QrFormComponent,
    FlashyAccordionComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
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