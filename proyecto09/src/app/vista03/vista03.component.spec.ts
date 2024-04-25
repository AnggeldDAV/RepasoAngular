import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista03Component } from './vista03.component';

describe('Vista03Component', () => {
  let component: Vista03Component;
  let fixture: ComponentFixture<Vista03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vista03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Vista03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
