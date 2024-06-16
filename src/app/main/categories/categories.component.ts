import { listaCategorias } from './data/cat-data';
import { Component, OnInit } from '@angular/core';
import { Category } from './model/cat-model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  
  listaCategorias: Category[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listaCategorias = listaCategorias;
  }
}
