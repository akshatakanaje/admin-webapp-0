import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categoriesList:any[] = [];
  public categoryInfo:any;

  public selectedImageIdx: number = 0;
  public thumbnailImageIdx: number = 0;
  public tempImageFiles: any[] = [];


  constructor(private categoriesService: CategoriesService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe((response:any)=> {
      //console.log(response);
       this.categoriesList = response;
    })
  }

  openProductCategoryDialog(modelRef:any, productCategoryObj = null) {
    //console.log(productCategoryObj);
    this.modalService.open(modelRef);
    this.categoryInfo = productCategoryObj;
  }

  // view image model
  openImageModal(modal: any, imageUrls: string[], thumbnailImageIdx: number) {
    this.tempImageFiles = [...imageUrls];
    this.thumbnailImageIdx = thumbnailImageIdx;
    this.modalService.open(modal, { 
      size: "xl",
      scrollable: true 
    });
  }

  // open image
  openImage(url: string) {
      window.open(url, "_blank")
  }

  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }
  
}
