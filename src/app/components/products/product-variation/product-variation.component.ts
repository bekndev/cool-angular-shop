import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-variation',
  templateUrl: './product-variation.component.html',
  styleUrls: ['./product-variation.component.css']
})
export class ProductVariationComponent implements OnInit {
  @Input() variation: {};
  @Input() currentVariation: {};
  @Input() changeVariation: Function;

  constructor() { }

  ngOnInit(): void {
  }

}
