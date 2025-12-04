import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tt');
  constructor(private service: Api) {
    this.show()
  }

  public titles: any;

  show() {
    this.service.getAll().subscribe( (data:any) => {
      this.titles = data
    } )
  }
}
