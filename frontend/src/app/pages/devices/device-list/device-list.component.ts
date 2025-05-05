import { Component, OnInit } from '@angular/core';
import { Device } from '../../../resources/device/device.model';
import { DeviceService } from '../../../resources/device/device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css'
})

export class DeviceListComponent implements OnInit {
  devices: Device[] = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices() {
    this.deviceService.getAll().subscribe(devices => {
      this.devices = devices;
    });
  }

  remove(id: number) {
    if (confirm('Are you sure you want to delete this device?')) {
      this.deviceService.delete(id).subscribe(() => this.loadDevices());
    }
  }
}
