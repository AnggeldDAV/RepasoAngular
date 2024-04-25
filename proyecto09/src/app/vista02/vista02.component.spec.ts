import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista02Component } from './vista02.component';

describe('Vista02Component', () => {
  let component: Vista02Component;
  let fixture: ComponentFixture<Vista02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vista02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Vista02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
