import CustomWebsocket from '~/utils/hybridizeKeyService/CustomWebsocket';
import {
    updateStatus,
    updateIsWebsocketRunning,
    reset,
} from '~/features/hybridizeKeyServiceTestRunStatus/hybridizeKeyServiceTestRunStatusSlice';
import type WebsocketResponseMessage from '~/redux/middleware/types/WebsocketResponseMessage';
import { sendHybridizeKeyServiceTestRunRequest } from '~/features/hybridizeKeyServiceTestRun/reducers/sendHybridizeKeyServiceTestRunRequest';

const hybridizeKeyServiceTestRunStatusWebsocketUrl: string =
    import.meta.env.VITE_HYBRIDIZE_KEY_SERVICE_TEST_RUN_STATUS_WEBSOCKET_URL + '/status/';
let websocket: CustomWebsocket;

const hybridizeKeyServiceTestRunStatusWebsocketMiddleware = () => {
    return (storeAPI: any) => {
        const { dispatch } = storeAPI;

        return (next: any) =>
            (action: any): any => {
                if (
                    sendHybridizeKeyServiceTestRunRequest.fulfilled.match(action) ||
                    action.type === 'hybridizeKeyServiceTestRunStatus/load'
                ) {
                    const id = action.payload.id;
                    const { hybridizeKeyServiceTestRunStatus } = storeAPI.getState();
                    if (id && id !== '' && !hybridizeKeyServiceTestRunStatus.isWebsocketRunning) {
                        dispatch(updateIsWebsocketRunning(true));
                        websocket = new CustomWebsocket();
                        websocket.connect(hybridizeKeyServiceTestRunStatusWebsocketUrl + id);
                        websocket.on('error', (): void => {
                            dispatch(reset(undefined));
                        });
                        websocket.on('close', (): void => {
                            dispatch(updateIsWebsocketRunning(false));
                        });
                        websocket.on('message', (event: any): void => {
                            const websocketResponseMessage: WebsocketResponseMessage = JSON.parse(
                                event.data,
                            );
                            const status = websocketResponseMessage.status;
                            dispatch(updateStatus(status));
                            if (status === 'finished') {
                                websocket.disconnect();
                                dispatch(updateIsWebsocketRunning(false));
                            }
                        });
                    }
                }

                return next(action);
            };
    };
};

export default hybridizeKeyServiceTestRunStatusWebsocketMiddleware;
