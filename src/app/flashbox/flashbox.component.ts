import { Component } from '@angular/core';

@Component({
  selector: 'app-flashbox',
  templateUrl: './flashbox.component.html',
  styleUrls: ['./flashbox.component.scss']
})
export class FlashboxComponent {
  email:string = '';

  images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg2.jpg', 'bg1.jpg'];

  // http.get('url).subscribe((data) => { this.images = data.attributes.images.formats.thumbail.url; });

}
