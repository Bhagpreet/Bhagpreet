import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';

export const slidingAnimation = animation ([
    trigger('slideInOut', [
        transition(':enter', [
          style({transform: 'translateX(-100%)'}),
          animate('500ms ease-in', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
          animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
        ])
    ])
]);