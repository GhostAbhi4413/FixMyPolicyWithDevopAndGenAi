

import { Component } from '@angular/core';
import { PolicyService } from '../../services/policy';
import { ResultService } from '../../services/result.service'; // ✅ new
@Component({
  selector: 'app-document-upload',
  standalone: false,
  templateUrl: './document-upload.html',
  styleUrl: './document-upload.scss'
})
export class DocumentUpload {
  loading = false;
  selectedFile: File | null = null;

  constructor(
    private policyService: PolicyService,
    private resultService: ResultService // ✅ inject
  ) {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (!this.selectedFile) {
      alert('Please select a file.');
      return;
    }

    this.loading = true;

    this.policyService.uploadFile(this.selectedFile!).subscribe({
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


