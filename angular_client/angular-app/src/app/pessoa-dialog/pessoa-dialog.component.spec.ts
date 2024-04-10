import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaDialogComponent } from './pessoa-dialog.component';

describe('PessoaDialogComponent', () => {
  let component: PessoaDialogComponent;
  let fixture: ComponentFixture<PessoaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaDialogComponent]
    });
    fixture = TestBed.createComponent(PessoaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
