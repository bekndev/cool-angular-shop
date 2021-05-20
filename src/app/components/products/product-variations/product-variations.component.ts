import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-variations',
  templateUrl: './product-variations.component.html',
  styleUrls: ['./product-variations.component.css']
})
export class ProductVariationsComponent implements OnInit {
  @Input() variations: [];
  @Input() currentVariation: {};
  @Input() changeVariation: Function;

  constructor() { }

  ngOnInit(): void {
  }

}
