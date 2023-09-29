import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardRouter } from './dashboard-routing.module';
import { DashboardMainViewComponent } from './dashboard-main-view/dashboard-main-view.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import {  MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {  ReactiveFormsModule } from '@angular/forms';
import { DashboardFynkaHomePageComponent } from './dashboard-fynka-home-page/dashboard-fynka-home-page.component';
import { GalleriaModule } from 'primeng/galleria';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import {DropdownModule} from 'primeng/dropdown';

import {MenubarModule} from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {CalendarModule} from 'primeng/calendar';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { ChartModule } from 'primeng/chart';
import {GMapModule} from 'primeng/gmap';
import { AgmCoreModule } from '@agm/core';
import { WidgetsModules } from 'src/app/widgets/login-header/widgets.module';

@NgModule({
  declarations: [DashboardMainViewComponent, DashboardFynkaHomePageComponent,NavbarComponent],
  imports: [
    DashboardRouter,
    MenubarModule,
    GMapModule,WidgetsModules,
    MatFormFieldModule,
    CalendarModule,
    ChartModule,
    MatGridListModule,
    MatDatepickerModule,
    CommonModule,
    GalleriaModule,
    MatToolbarModule,
    TranslateModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    TabViewModule,
    TabMenuModule,
    DropdownModule,
    TieredMenuModule,
    AvatarModule,
    AvatarGroupModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
})
export class DashboardModule {}
