/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { VenueComponent } from './venue.component';

describe('Component: Venue', () => {
  it('should create an instance', () => {
    let component = new VenueComponent();
    expect(component).toBeTruthy();
  });
});
