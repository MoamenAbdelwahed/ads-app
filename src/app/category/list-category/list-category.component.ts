import { Component, OnInit , Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Category} from '../../model/category.model';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories: any;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCategories()
      .subscribe( data => {
        this.categories = data;
      });
  }

  deleteCategory(category: Category): void {
    this.apiService.deleteCategory(category.id)
      .subscribe( data => {
        this.categories = this.categories.filter(u => u !== category);
      });
  }

  editCategory(category: Category): void {
    window.localStorage.removeItem('editCategoryId');
    window.localStorage.setItem('editCategoryId', category.id.toString());
    this.router.navigate(['edit-category']);
  }

  addCategory(): void {
    this.router.navigate(['add-category']);
  }
}
