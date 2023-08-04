import { Component, HostBinding } from '@angular/core';
import { trigger, transition, animate, style, query, stagger, group} from '@angular/animations';
import { environment } from 'src/environments/environment';
import { ChildrenOutletContexts } from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('routerTransition', [
    transition('* <=> *', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))]),
      ])
    ])
  ])]
})
export class AppComponent {
  title = 'delit';
  host = environment.server;

  constructor(private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  getState(outlet:any) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRouteData.state;
  }
}
