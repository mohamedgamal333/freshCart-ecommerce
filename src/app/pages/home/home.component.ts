import { Component, inject, OnInit } from '@angular/core';
import { privateDecrypt } from 'crypto';
import { ProductsService } from '../../core/services/products/products.service';
import { IProduct } from '../../shared/interfaces/iproduct';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { ICategory } from '../../shared/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
// static slider
customMainSlider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  navSpeed: 700,
  navText: ['', ''],
  items: 1,
  nav: false
}




  // dynamic slider
  private readonly productServices = inject(ProductsService);
  private readonly categoriesService = inject(CategoriesService);
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-circle-chevron-left"></i>', '<i class="fa-solid fa-circle-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
//


  products:IProduct[] = [];
  categories:ICategory[] = [];
  getProductsData(): void {
    this.productServices.getAllProducts().subscribe({
      next: (res) => {
        console.log('products',res.data);
        this.products = res.data;
      },
      error: (err) => {
        console.log(err);
      }

    });
  }
  getCategoriesData(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (res) => {

        console.log('categories', res.data);
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      }
  });
}
ngOnInit(): void {
  this.getProductsData();
   this.getCategoriesData();
  }



}
function next(value: any): void {
  throw new Error('Function not implemented.');
}

