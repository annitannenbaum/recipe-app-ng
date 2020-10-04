import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeTagsComponent } from './recipe-tags.component';

describe('RecipeTagsComponent', () => {
  let component: RecipeTagsComponent;
  let fixture: ComponentFixture<RecipeTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
