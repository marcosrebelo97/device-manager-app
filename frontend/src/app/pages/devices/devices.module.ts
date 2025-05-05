import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { DeviceFormComponent } from './device-form/device-form.component';
import { DeviceListComponent } from './device-list/device-list.component';


@NgModule({
  declarations: [
    DevicesComponent,
    DeviceFormComponent,
    DeviceListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    DevicesRoutingModule
  ]
})
export class DevicesModule { }
