import { Component } from '@angular/core';
declare var VANTA;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  // VANTA : any;
  ngOnInit(){
    VANTA.BIRDS({
      el: "#body1",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      colorMode: "lerp"
    })
  }
//  
test(){
  // console.log("hello");
  
  // VANTA.BIRDS({
  //   el: "#body1",
  //   mouseControls: true,
  //   touchControls: true,
  //   minHeight: 200.00,
  //   minWidth: 200.00,
  //   scale: 1.00,
  //   scaleMobile: 1.00,
  //   colorMode: "lerp"
  // })

}
// window.onload = function () {
//   VANTA.BIRDS({
//     el: "#body1",
//     mouseControls: true,
//     touchControls: true,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     colorMode: "lerp"
//   });
// }


}
