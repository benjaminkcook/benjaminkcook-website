import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from 'src/particles-config';

declare var particlesJS: any;

@Component({
  selector: 'website',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
    this.invokeParticles();
}

public invokeParticles(): void {
  particlesJS('particles-js', ParticlesConfig, function() {});
}
}
