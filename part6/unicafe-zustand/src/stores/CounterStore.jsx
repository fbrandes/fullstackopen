import {create} from "zustand";

export const useCounterStore = create(set => ({
    statistics: {
        good: 0,
        neutral: 0,
        bad: 0
    },
    actions: {
        setGood: () => set(state => ({
            statistics: {
                ...state.statistics,
                good: state.statistics.good + 1,
            }
        })),
        setNeutral: () => set(state => ({
            statistics: {
                ...state.statistics,
                neutral: state.statistics.neutral + 1,
            }
        })),
        setBad: () => set(state => ({
            statistics: {
                ...state.statistics,
                bad: state.statistics.bad + 1,
            }
        }))
    }
}));

export const useCounter = () => useCounterStore((state) => state.statistics);
export const useCounterControls = () => useCounterStore((state) => state.actions);
