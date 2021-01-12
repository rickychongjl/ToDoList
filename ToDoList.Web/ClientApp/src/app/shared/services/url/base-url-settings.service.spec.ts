import { TestBed } from '@angular/core/testing';

import { BaseUrlSettingsService } from './base-url-settings.service';

describe('BaseUrlSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseUrlSettingsService = TestBed.get(BaseUrlSettingsService);
    expect(service).toBeTruthy();
  });
});
