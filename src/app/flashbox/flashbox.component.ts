import { Component } from '@angular/core';

@Component({
  selector: 'app-flashbox',
  templateUrl: './flashbox.component.html',
  styleUrls: ['./flashbox.component.scss']
})
export class FlashboxComponent {
  email:string = '';

  images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];

}
