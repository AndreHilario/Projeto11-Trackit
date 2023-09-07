import useAsync from '../useAsync';
import * as authApi from '../../services/todayApi';

export function useCheckHabits() {
    const {
        loading: checkLoading,
        error: checkError,
        act: checkHabit,
    } = useAsync(authApi.check, false);

    return {
        checkLoading,
        checkError,
        checkHabit,
    };
}

export function useGetTodayHabits() {
    const {
        loading: todayHabitsLoading,
        error: todayHabitsError,
        act: getTodayHabits,
    } = useAsync(authApi.getTodayHabits, false);

    return {
        todayHabitsLoading,
        todayHabitsError,
        getTodayHabits,
    };
}

export function useUncheckHabits() {
    const {
        loading: uncheckLoading,
        error: uncheckError,
        act: uncheckHabit,
    } = useAsync(authApi.uncheck, false);

    return {
        uncheckLoading,
        uncheckError,
        uncheckHabit,
    };
}