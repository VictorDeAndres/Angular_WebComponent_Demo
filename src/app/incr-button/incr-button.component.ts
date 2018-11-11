import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'webcomponentdemo-incr-button',
  template: `
    <button class="incrButton" (click)="handleClick()">{{label}}</button>
  `,
  styles: [`
    .incrButton {
      background-color:#44c767;
      -moz-border-radius:28px;
      -webkit-border-radius:28px;
      border-radius:28px;
      border:1px solid #18ab29;
      display:inline-block;
      cursor:pointer;
      color:#ffffff;
      font-family:Arial;
      font-size:14px;
      padding:16px 31px;
      text-decoration:none;
      text-shadow:0px 1px 0px #2f6627;
    }

    .incrButton:hover {
      background-color:#5cbf2a;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})

export class IncrButtonComponent {

  constructor() { }

  @Output() action = new EventEmitter<number>();
  @Input() label = 'Incrementa Valor';


  private contadorClick = 0;

  public handleClick(): void {
    this.contadorClick++;
    this.action.emit(this.contadorClick);
  }

}


// import {
//   Input,
//   Component,
//   ViewEncapsulation,
//   EventEmitter,
//   Output
// } from '@angular/core';

// @Component({
//   selector: 'webcomponentdemo-custom-button',
//   template: `<button (click)="handleClick()">{{label}}</button>`,
//   styles: [
//     `
//     button {
//       border: solid 3px;
//       padding: 8px 10px;
//       background: #bada55;
//       font-size: 20px;
//     }
//   `
//   ],
//   encapsulation: ViewEncapsulation.Native
// })
// export class ButtonComponent {
//   @Input() label = 'default label';
//   @Output() action = new EventEmitter<number>();
//   private clicksCt = 0;

//   handleClick() {
//     this.clicksCt++;
//     this.action.emit(this.clicksCt);
//   }
// }
