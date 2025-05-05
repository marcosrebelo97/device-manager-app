import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CategoryService } from '../../../resources/category/category.service';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})


export class CategoryFormComponent {
  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(128)]],
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      this.categoryService.create(this.categoryForm.value).subscribe({
        next: () => {
          alert('Category created successfully!');
          this.categoryForm.reset();
        },
        error: () => {
          alert('Failed to create category.');
        }
      });
    }
  }
}
