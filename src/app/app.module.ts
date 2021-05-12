import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GridListComponent } from './component/grid-list/grid-list.component';
import { MatListComponent } from './component/mat-list/mat-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ExpensionpanelComponent } from './component/expensionpanel/expensionpanel.component';
import { CardsComponent } from './component/cards/cards.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { StepperComponent } from './component/stepper/stepper.component';
import { InputFromComponent } from './component/input-from/input-from.component';
import { SelectComponent } from './component/select/select.component';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CheckandradioComponent } from './component/checkandradio/checkandradio.component';
import { DatepickerComponent } from './component/datepicker/datepicker.component';
import { TootipComponent } from './component/tootip/tootip.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { DialogExampleComponent } from './component/dialog/dialog-example/dialog-example.component';
import { DatatableComponent } from './component/datatable/datatable.component';


const appRoutes : Routes = [
  {path: '' , component: MatListComponent},
  {path: 'gridlist' , component: GridListComponent},
  {path: 'expensionpanel', component:ExpensionpanelComponent},
  {path: 'card', component:CardsComponent},
  {path: 'tabs', component:TabsComponent},
  {path: 'stepper', component:StepperComponent},
  {path: 'input-form', component:InputFromComponent},
  {path: 'select' , component:SelectComponent}, 
  {path:'autocomplete' , component:AutocompleteComponent},
  {path:'checkandradio' , component:CheckandradioComponent},
  {path: 'datepicker' , component:DatepickerComponent},
  {path:'tooltip', component:TootipComponent},
  {path:'snackbar', component:SnackbarComponent},
  {path:'dialog' , component:DialogComponent},
  {path:'datatable', component:DatatableComponent}


]



@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    MatListComponent,
    ExpensionpanelComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,
    InputFromComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckandradioComponent,
    DatepickerComponent,
    TootipComponent,
    SnackbarComponent,
    DialogComponent,
    DialogExampleComponent,
    DatatableComponent
 
  ],
  entryComponents: [ DialogExampleComponent]
  ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
