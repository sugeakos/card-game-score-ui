import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-aaaa',
  standalone: true,
  imports: [],
  templateUrl: './test-aaaa.component.html',
  styleUrl: './test-aaaa.component.scss'
})
export class TestAaaaComponent implements OnInit{
  ngOnInit(): void {
    console.log('TestAaaaa works')
  }

}
