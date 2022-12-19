import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitopsComponent } from './gitops.component';

describe('GitopsComponent', () => {
  let component: GitopsComponent;
  let fixture: ComponentFixture<GitopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
