import { describe, expect, test, vitest } from 'vitest';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import store from '../../app/store';
import { fetchShowBySearchKeyword } from './showSlice';
import showReducer from '../../features/show/showSlice';
import { initialState } from './initialState';

describe('API Fetching', () => {
  const inputState = store.getState().show;

  test('should set status to "pending"', async () => {
    const action = { type: fetchShowBySearchKeyword.pending.type };
    const state = showReducer(inputState, action);
    expect(state).toEqual({
      ...inputState,
      loading: true,
      status: 'pending'
    });
  });

  test('should set status to "idle/fulfiled"', async () => {
    const payload = { ...inputState, name: 'Vikings' };

    const action = {
      type: fetchShowBySearchKeyword.fulfilled.type,
      payload: payload
    };
    const state = showReducer(inputState, action);
    expect(state).toEqual({
      ...inputState,
      show: payload,
      status: 'idle'
    });
  });

  test('should set status to "failed"', async () => {
    const action = {
      type: fetchShowBySearchKeyword.rejected.type,
      payload: 'loading error'
    };
    const state = showReducer(inputState, action);
    expect(state).toEqual({
      ...inputState,
      error: 'loading error',
      status: 'failed'
    });
  });
});
