import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUpload } from './document-upload';

describe('DocumentUpload', () => {
  let component: DocumentUpload;
  let fixture: ComponentFixture<DocumentUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
