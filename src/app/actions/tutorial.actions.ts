// import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';

export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

export class AddTuorial implements Action {
    readonly type = ADD_TUTORIAL;

    constructor(public payload: Tutorial) {

    }
}

export class RemoveTuorial implements Action {
    readonly type = REMOVE_TUTORIAL;

    constructor(public payload: number) {

    }
}

export type Actions = AddTuorial | RemoveTuorial