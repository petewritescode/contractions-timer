import { createSelector } from '@reduxjs/toolkit';
import { Status } from '../../models/status.model';
import { TimerState } from './timer.slice';

export const getSlice = (state: { timer: TimerState }) => state.timer;
export const getRunning = createSelector(getSlice, (slice) => slice.running);
export const getContractions = createSelector(getSlice, (slice) => slice.contractions);
export const getLastContraction = createSelector(getContractions, (contractions) => contractions[contractions.length - 1]);

export const getStatus = createSelector(
    getRunning,
    getLastContraction,
    (running, lastContraction) => {
        if (!running) {
            return Status.Stopped;
        }

        return lastContraction.duration === undefined ? Status.Contraction : Status.Rest;
    }
);

export const getPhaseStartTime = createSelector(
    getLastContraction,
    (lastContraction) => lastContraction && (lastContraction.start + (lastContraction.duration || 0))
);
