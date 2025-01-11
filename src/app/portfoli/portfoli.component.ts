import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-portfoli',
  imports: [],
  templateUrl: './portfoli.component.html',
  styleUrl: './portfoli.component.css'
})
export class PortfoliComponent {
row: HTMLElement | null = null;
imgSrc: string = '';
clicked:boolean = false;
constructor(){
}
// ngAfterViewInit(): void {
//   this.row = document.querySelector('.row.imgs-container');
//   console.log(this.row);

// }
getSrc(event:MouseEvent):void{
  const target = event.target as HTMLElement;
  // نوعه الافتراضي في TypeScript هو EventTarget | null، وهو نوع عام جدًا لا يحتوي على خصائص أو طرق محددة مثل innerHTML أو value.

  if(target.classList.contains('img')){
    const img = target.querySelector('img') as HTMLImageElement;
     this.imgSrc = img.src;
     this.clicked = true;
  }
}
closeImg(event:MouseEvent):void{
  const target = event.target as HTMLElement;
  if(!target.classList.contains('openedImg')){
     this.clicked = false;
  }
}

}
