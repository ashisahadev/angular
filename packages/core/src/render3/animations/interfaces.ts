/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export interface Timing {
  duration: number;
  delay: number;
  easing: string|null;
  fill: FillMode|null;
}

export interface StylingEffect {
  timing: Timing;
  classes: {[className: string]: boolean}|null;
  styles: {[key: string]: any}|null;
}

export const enum AnimatorState {
  Idle = 1,
  WaitingForFlush = 2,
  ProcessingEffects = 3,
  Running = 4,
  Exiting = 5,
  Destroyed = 6,
}

export interface Animator {
  state: AnimatorState;
  addEffect(effect: StylingEffect): void;
  finishEffect(effect: StylingEffect): void;
  finishAll(): void;
  destroyEffect(effect: StylingEffect): void;
  scheduleFlush(): void;
  flushEffects(): boolean;
  destroy(): void;
  onAllEffectsDone(cb: () => any): void;
}

export declare type FillMode = 'forwards' | 'backwards' | 'both';