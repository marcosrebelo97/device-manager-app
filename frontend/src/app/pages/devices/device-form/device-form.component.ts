import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { DeviceService } from '../../../resources/device/device.service';
import { CategoryService } from '../../../resources/category/category.service';
import { Category } from '../../../resources/category/category.model';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})

export class DeviceFormComponent implements OnInit {
  deviceForm: FormGroup;
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.deviceForm = this.fb.group({
      categoryId: [null, Validators.required],
      color: ['', [Validators.required, Validators.maxLength(16), Validators.pattern(/^[A-Za-zÀ-ÿ\s]+$/)]],
      partNumber: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
  }

  onSubmit() {
    if (this.deviceForm.valid) {
      this.deviceService.create(this.deviceForm.value).subscribe({
        next: () => {
          alert('Device created successfully!');
          this.router.navigate(['/devices']);
        },
        error: () => {
          alert('Failed to create device.');
        }
      });
    }
  }
}
