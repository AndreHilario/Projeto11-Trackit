import useAsync from '../useAsync';
import * as authApi from '../../services/habitsApi';

export function usePostHabits() {
    const {
        loading: habitsLoading,
        error: habitsError,
        act: createHabit,
    } = useAsync(authApi.postHabits, false);

    return {
        habitsLoading,
        habitsError,
        createHabit,
    };
}

export function useGetHabits() {
    const {
        loading: habitsLoading,
        error: habitsError,
        act: getHabits,
    } = useAsync(authApi.getHabits, false);

    return {
        habitsLoading,
        habitsError,
        getHabits,
    };
}

export function useDeleteHabits() {
    const {
        loading: habitsLoading,
        error: habitsError,
        act: deleteHabit,
    } = useAsync(authApi.deleteHabits, false);

    return {
        habitsLoading,
        habitsError,
        deleteHabit,
    };
}