import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../resources/category/category.service';
import { Category } from '../../../resources/category/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})

export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAll().subscribe({
      next: (data) => this.categories = data,
      error: () => alert('Failed to load categories.'),
    });
  }

  deleteCategory(id: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.delete(id).subscribe({
        next: () => this.loadCategories(),
        error: () => alert('Failed to delete category.'),
      });
    }
  }
}
