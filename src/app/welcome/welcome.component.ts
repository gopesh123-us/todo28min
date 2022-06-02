import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message: string = 'hello';
  username = '';

  constructor(private route: ActivatedRoute) {
    this.message = 'welcome!';

   }

  ngOnInit(): void {
    console.log(this.message);
    this.username = this.route.snapshot.params['name'];
  }

}
