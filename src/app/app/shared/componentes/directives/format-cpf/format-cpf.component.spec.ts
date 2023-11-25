import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatCpfComponent } from './format-cpf.component';

describe('FormatCpfComponent', () => {
  let component: FormatCpfComponent;
  let fixture: ComponentFixture<FormatCpfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormatCpfComponent]
    });
    fixture = TestBed.createComponent(FormatCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
