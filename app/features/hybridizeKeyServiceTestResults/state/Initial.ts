export interface HybridizeKeyServiceTestTimestampLog {
    timestamp: number;
    kms: string;
    event: string;
    relative_time: number;
}

export interface HybridizeKeyServiceRAMLog {
    timestamp: number;
    kms_ram_in_mb: number[];
    hks_ram_in_mb: number[];
    relative_time: number;
}

export interface HybridizeKeyServiceTestResultsState {
    ram_logs: HybridizeKeyServiceRAMLog[];
    timestamps_logs: HybridizeKeyServiceTestTimestampLog[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const InitialState: HybridizeKeyServiceTestResultsState = {
    ram_logs: [],
    timestamps_logs: [],
    status: 'idle',
};

export default InitialState;
