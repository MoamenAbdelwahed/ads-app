import { Component, OnInit , Inject} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {count, first} from 'rxjs/operators';
import {Category} from '../../model/category.model';
import {ApiService} from '../../service/api.service';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: Category;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    const categoryId = window.localStorage.getItem('editCategoryId');
    if (!categoryId) {
      alert('Invalid action.');
      this.router.navigate(['list-category']);
      return;
    }
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.apiService.getCategoryById(parseInt(categoryId))
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.apiService.updateCategory(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          alert('Category updated successfully.');
          this.router.navigate(['list-category']);
        },
        error => {
          alert(error);
        });
  }
}
