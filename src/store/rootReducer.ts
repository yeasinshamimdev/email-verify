import RtkQueryService from '@/services/RtkQueryService';
import { AnyAction, CombinedState, Reducer, combineReducers } from 'redux';
import base, { BaseState } from './slices/base';
import bulk, { JobIdState } from './slices/bulk/bulk';
import locale, { LocaleState } from './slices/locale/localeSlice';
import theme, { ThemeState } from './slices/theme/themeSlice';

export type RootState = CombinedState<{
  base: CombinedState<BaseState>;
  locale: LocaleState;
  theme: ThemeState;
  bulk: JobIdState;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [RtkQueryService.reducerPath]: any;
}>;

export interface AsyncReducers {
  [key: string]: Reducer<any, AnyAction>;
}

const staticReducers = {
  base,
  locale,
  theme,
  bulk,
  [RtkQueryService.reducerPath]: RtkQueryService.reducer,
};

const rootReducer =
  (asyncReducers?: AsyncReducers) => (state: RootState, action: AnyAction) => {
    const combinedReducer = combineReducers({
      ...staticReducers,
      ...asyncReducers,
    });
    return combinedReducer(state, action);
  };

export default rootReducer;
