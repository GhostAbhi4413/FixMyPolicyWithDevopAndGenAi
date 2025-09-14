import { Component } from '@angular/core';
import { PolicyService } from '../app/services/policy';
import { ResultService } from '../app/services/result.service';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  responseText: string = 'Choose a method and submit your text or document.';

  constructor(private resultService: ResultService) {}

  ngOnInit(): void {
    this.resultService.result$.subscribe((result) => {
      if (result) {
        this.responseText = `
          <strong>Plain English:</strong><br>${result["Plain English"] || 'N/A'}<br><br>
          <strong>Risks:</strong><br>${result["Risks"] || 'N/A'}<br><br>
          <strong>Suggestions:</strong><br>${
            Array.isArray(result["Suggestions"])
              ? result["Suggestions"].join("<br>")
              : result["Suggestions"] || 'N/A'
          }
        `;
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
