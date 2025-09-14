
import { Component } from '@angular/core';
import { PolicyService } from '../../services/policy';
import { ResultService } from '../../services/result.service';
@Component({
  selector: 'app-text-input',
  standalone: false,
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss'
})
export class TextInputComponent {
  text: string = '';
  loading = false;

  constructor(
    private policyService: PolicyService,
    private resultService: ResultService // ✅ inject
  ) {}

  analyze() {
    if (!this.text.trim()) {
      alert('Please enter some text.');
      return;
    }

    this.loading = true;

    this.policyService.analyzeText(this.text).subscribe({
      next: (res) => {
        this.resultService.setResult(res); // ✅ pass to service
        this.loading = false;
      },
      error: (err) => {
        alert('❌ Error: ' + err.message);
        this.loading = false;
      }
    });
  }
}




