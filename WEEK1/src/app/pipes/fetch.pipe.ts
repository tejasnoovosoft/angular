import {Pipe, PipeTransform} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../product.service";

@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchPipe implements PipeTransform {
  private cachedData: Product[] = [];
  private cachedUrl = '';

  constructor(private http: HttpClient) {
  }

  transform(url: string): any {
    if (url !== this.cachedUrl) {
      this.cachedData = [];
      this.cachedUrl = url;
      this.http.get<Product[]>(url).subscribe(result => {
        this.cachedData = result
      });
    }
    return this.cachedData;
  }

}
