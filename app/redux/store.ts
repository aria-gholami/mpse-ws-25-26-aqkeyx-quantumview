import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import keyExchangeMechanismSlice from '~/features/keyExchangeMechanism/keyExchangeMechanismSlice';
import messageAuthenticationCodeMechanismSlice from '~/features/messageAuthenticationCodeMechanism/messageAuthenticationCodeMechanismSlice';
import messageAuthenticationCodeUnderlyingFunctionSlice from '~/features/messageAuthenticationCodeUnderlyingFunction/messageAuthenticationCodeUnderlyingFunctionSlice';
import hybridizeKeyServiceTestRunStatusSlice from '~/features/hybridizeKeyServiceTestRunStatus/hybridizeKeyServiceTestRunStatusSlice';
import hybridizeKeyServiceTestRunSlice from '~/features/hybridizeKeyServiceTestRun/hybridizeKeyServiceTestRunSlice';
import hybridizeKeyServiceTestResultsSlice from '~/features/hybridizeKeyServiceTestResults/hybridizeKeyServiceTestResultsSlice';
import cmsLandingpageSlice from '~/features/cmsLandingpage/cmsLandingpageSlice';
import cmsNewsSlice from '~/features/cmsNews/cmsNewsSlice';
import contactFormSlice from '~/features/contactForm/contactFormSlice';
import languageSlice from '~/features/language/languageSlice';
import hybridizeKeyServiceTestRunStatusWebsocketMiddleware from '~/redux/middleware/hybridizeKeyServiceTestRunStatusWebsocketMiddleware';
import cmsRelatedWorksSlice from '~/features/cmsRelatedWorks/cmsRelatedWorksSlice';

const createNoopStorage = () => ({
    getItem(_key: string) {
        return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
        return Promise.resolve(value);
    },
    removeItem(_key: string) {
        return Promise.resolve();
    },
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootReducer = combineReducers({
    keyExchangeMechanism: keyExchangeMechanismSlice.reducer,
    messageAuthenticationCodeMechanism: messageAuthenticationCodeMechanismSlice.reducer,
    messageAuthenticationCodeUnderlyingFunction:
        messageAuthenticationCodeUnderlyingFunctionSlice.reducer,
    hybridizeKeyServiceTestRunStatus: hybridizeKeyServiceTestRunStatusSlice.reducer,
    hybridizeKeyServiceTestRun: hybridizeKeyServiceTestRunSlice.reducer,
    hybridizeKeyServiceTestResults: hybridizeKeyServiceTestResultsSlice.reducer,
    cmsLandingpage: cmsLandingpageSlice.reducer,
    cmsNews: cmsNewsSlice.reducer,
    cmsRelatedWorks: cmsRelatedWorksSlice.reducer,
    contactForm: contactFormSlice.reducer,
    language: languageSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['language', 'hybridizeKeyServiceTestResults'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }).concat(hybridizeKeyServiceTestRunStatusWebsocketMiddleware()),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
