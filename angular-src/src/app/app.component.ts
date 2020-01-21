import { Component } from '@angular/core';
import { AddTextService } from './services/add-text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text:string;
  result:string;

  constructor(private addTextService: AddTextService ){}
  onSubmit(){
    this.addTextService.addText(this.text).subscribe(res => this.result = res)
  }
}
