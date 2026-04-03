# Redux Toolkit
Diese README beschreibt den Aufbau und die grundlegenden Konzepte einer React-Anwendung, die Redux Toolkit zur State-Verwaltung nutzt. Ziel ist es, eine skalierbare, wartbare und typsichere Architektur für synchrone und asynchrone Zustände bereitzustellen.

## Inhaltsverzeichnis
- [Kernkonzepte](#kernkonzepte)
- [State-Persistenz (redux-persist)](#state-persistenz-redux-persist)
- [Integration in React](#integration-in-react)
- [Weitere Informationen](#weitere-informationen)

## Kernkonzepte
1. Store erstellen mit `configureStore()`

Der Store ist das Herzstück von Redux. Er hält den globalen Zustand der gesamten Anwendung.
````
export const store = configureStore({
    reducer: {
        keyExchangeMechanism: keyExchangeMechanismSlice.reducer,
        messageAuthenticationCodeMechanism: messageAuthenticationCodeMechanismSlice.reducer,
        messageAuthenticationCodeUnderlyingFunction:
            messageAuthenticationCodeUnderlyingFunctionSlice.reducer,
        hybridizeKeyServiceTestRunStatus: hybridizeKeyServiceTestRunStatusSlice.reducer,
        hybridizeKeyServiceTestRun: hybridizeKeyServiceTestRunSlice.reducer,
        hybridizeKeyServiceTestResults: hybridizeKeyServiceTestResultsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(hybridizeKeyServiceTestRunStatusWebsocketMiddleware()),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
````

## State-Persistenz (redux-persist)
In der App wird `redux-persist` verwendet, um ausgewählte Teile des Redux-States im `localStorage` zu speichern und beim Reload wiederherzustellen.

Aktuell persistierte Slices (Whitelist in `persistConfig.whitelist`):
- `language` → merkt sich die aktuell gewählte Sprache über Sitzungen hinweg
- `hybridizeKeyServiceTestResults` → hält die zuletzt geladenen Testergebnis-Logs, sodass sie nach einem Reload verfügbar sind

Auszug aus der Store-Konfiguration:

```
const persistConfig = {
  key: 'root',
  storage,                
  whitelist: ['language', 'hybridizeKeyServiceTestResults'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
```

Hinweis:
- Nicht alle Slices werden persistiert (z. B. volatile Laufzeit-/UI-Zustände). Persistiert werden nur States, die über Seiten-Reloads wertvoll sind.


2. Slices mit `createSlice()`

Ein Slice ist eine Sammlung von Redux-Logik für ein bestimmtes Feature. Es kombiniert Reducer und Actions.
Ein Slice kapselt:
- den initialen State
- synchrone Reducer
- asynchrone Zustandsänderungen (extraReducers)

ExtraReducer genauer erklärt:
- `extraReducers` reagieren auf die Lifecycle-Phasen eines Async-Thunks:
    - `pending` → Ladezustand
    - `fulfilled` → erfolgreiche Datenübernahme
    - `rejected` → Fehlerzustand
````
const hybridizeKeyServiceTestResultsSlice = createSlice({
    name: 'hybridizeKeyServiceTestResults',
    initialState,
    reducers: {
        resetResults(state): void {
            state.status = 'idle';
            state.ram_logs = [];
            state.timestamps_logs = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHybridizeKeyServiceTestResults.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(
                fetchHybridizeKeyServiceTestResults.fulfilled,
                (state, action: PayloadAction<HybridizeKeyServiceTestResultsState>) => {
                    state.status = 'succeeded';
                    state.ram_logs = action.payload.ram_logs;
                    state.timestamps_logs = action.payload.timestamps_logs;
                },
            )
            .addCase(fetchHybridizeKeyServiceTestResults.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { resetResults } = hybridizeKeyServiceTestResultsSlice.actions;

export default hybridizeKeyServiceTestResultsSlice;
````

3. Asynchrone Logik mit `createAsyncThunk()`

`createAsyncThunk()` ist der empfohlene Weg für:
- API-Requests
- komplexe Nebenwirkungen
- asynchrone Geschäftslogik

Besonderer Fall im Codebeispiel:
- Der `condition`-Block verhindert unnötige oder doppelte Requests

````
export const fetchHybridizeKeyServiceTestResults = createAsyncThunk(
    'hybridizeKeyServiceTestResults/fetch',
    async (
        hybridizeKeyServiceTestResultsRequestBody: HybridizeKeyServiceTestResultsRequestBody,
    ) => {
        try {
            const url: string = `${import.meta.env.VITE_TEST_API_BASE_URL}/results/${hybridizeKeyServiceTestResultsRequestBody.experiment_id}`;
            const response = await fetch(url, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Response by hybridize key service test results api is invalid.');
            }

            return (await response.json()) as HybridizeKeyServiceTestResultsState;
        } catch (error) {
            console.error(error);

            throw error;
        }
    },
    {
        condition: (_arg, { getState }) => {
            const { hybridizeKeyServiceTestResults } = getState() as RootState;
            if (
                hybridizeKeyServiceTestResults.status === 'loading' ||
                hybridizeKeyServiceTestResults.status === 'succeeded'
            ) {
                return false;
            }
        },
    },
);
````

## Integration in React

### Store Provider einrichten
Der Redux-Store wird über den Provider allen Komponenten zur Verfügung gestellt.

````
export default function App() {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
        </Provider>
    );
}
````
➡️ Jede Kind-Komponente kann nun:
- State lesen
- Actions dispatchen

### Hooks verwenden
Redux Toolkit wird typischerweise zusammen mit React Hooks genutzt:
- `useSelector` → State lesen
- `useDispatch` → Actions auslösen

````
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
````

### Projektstruktur – Architekturüberblick
Die Struktur folgt einem Feature-first-Ansatz:

#### Beispiel: `hybridizeKeyServiceTestResults`
````
features/
└── hybridizeKeyServiceTestResults/
    ├── hybridizeKeyServiceTestResultsSlice.ts   # Slice & Reducer
    ├── reducer/
    │   └── fetchHybridizeKeyServiceTestResults.ts  # AsyncThunk
    └── state/
        └── Initial.ts                            # Initial State & Typen
````

## Weitere Informationen
Eine ausführliche und stets aktuelle Anleitung findest du in der offiziellen Redux-Toolkit-Dokumentation:

👉 https://redux-toolkit.js.org/
