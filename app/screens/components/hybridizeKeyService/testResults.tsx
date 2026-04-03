import {
    CartesianGrid,
    Legend,
    LineChart,
    Line,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';
import type { HybridizeKeyServiceTestResultsState } from '~/features/hybridizeKeyServiceTestResults/state/Initial';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { useTranslations } from '~/i18n/useTranslations';
import '../../../shared/styles/components/hybridizeKeyServiceTestResults.css';
import { reset } from '~/features/hybridizeKeyServiceTestResults/hybridizeKeyServiceTestResultsSlice';
import { HKS_COLORS, KMS_COLORS } from '~/shared/styles/components/testReultsColor';

export default function TestResults() {
    const dispatch = useAppDispatch();
    const { hybridize } = useTranslations();
    const hybridizeKeyServiceTestResultsState: HybridizeKeyServiceTestResultsState = useAppSelector(
        (state) => state.hybridizeKeyServiceTestResults,
    );

    const maxKmsCount = Math.max(
        0,
        ...hybridizeKeyServiceTestResultsState.ram_logs.map((log) => log.kms_ram_in_mb.length),
    );
    const maxHksCount = Math.max(
        0,
        ...hybridizeKeyServiceTestResultsState.ram_logs.map((log) => log.hks_ram_in_mb.length),
    );

    const chartData = hybridizeKeyServiceTestResultsState.ram_logs.map((log) => {
        const flatLog: any = { ...log };
        log.kms_ram_in_mb.forEach((value, index) => {
            flatLog[`kms${index + 1}_ram_in_mb`] = value;
        });
        log.hks_ram_in_mb.forEach((value, index) => {
            flatLog[`hks${index + 1}_ram_in_mb`] = value;
        });
        return flatLog;
    });

    return (
        <div className="hybridize-key-service-test-results-container">
            <section className="hybridize-key-service-test-results-header">
                <h1 className="mb-2">{hybridize.testResults.title}</h1>
                <p>{hybridize.testResults.subtitle}</p>
                <button
                    className="secondary-button mt-4"
                    onClick={() => {
                        dispatch(reset(undefined) as any);
                        window.location.reload();
                    }}
                >
                    {hybridize.testResults.resetTestResultsButton}
                </button>
            </section>

            <div className="hybridize-key-service-test-results-content-wrapper">
                <section className="hybridize-key-service-test-results-ram-logs-section">
                    <h2 className="mb-2">{hybridize.testResults.ramResults.cardTitle}</h2>
                    <p>{hybridize.testResults.ramResults.cardDescription}</p>
                    <div className="hybridize-key-service-test-results-ram-logs-chart-container">
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.05)" />
                                <XAxis
                                    dataKey="relative_time"
                                    label={{
                                        value: hybridize.testResults.ramResults.xAxisLabel,
                                        position: 'insideBottom',
                                        offset: -10,
                                    }}
                                    stroke="#666"
                                    tick={{ fill: '#666', fontSize: 12 }}
                                />
                                <YAxis
                                    label={{
                                        value: hybridize.testResults.ramResults.yAxisLabel,
                                        angle: -90,
                                        position: 'insideLeft',
                                    }}
                                    stroke="#666"
                                    tick={{ fill: '#666', fontSize: 12 }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'rgba(255, 255, 255)',
                                        border: '1px solid rgba(0, 0, 0, 0.1)',
                                        borderRadius: '12px',
                                        padding: '12px',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                    }}
                                    formatter={(
                                        value: number | string | undefined,
                                        name: string | undefined,
                                    ) => {
                                        const number =
                                            typeof value === 'number' ? value : Number(value ?? 0);

                                        return [
                                            `${number.toFixed(2)} ${hybridize.testResults.ramResults.unit}`,
                                            name,
                                        ];
                                    }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="line" />
                                {Array.from({ length: maxKmsCount }).map((_, index) => (
                                    <Line
                                        key={`kms${index + 1}`}
                                        type="monotone"
                                        dataKey={`kms${index + 1}_ram_in_mb`}
                                        stroke={KMS_COLORS[`kms${index + 1}`] || '#8884d8'}
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        name={`KMS${index + 1}`}
                                    />
                                ))}
                                {Array.from({ length: maxHksCount }).map((_, index) => (
                                    <Line
                                        key={`hks${index + 1}`}
                                        type="monotone"
                                        dataKey={`hks${index + 1}_ram_in_mb`}
                                        stroke={HKS_COLORS[`hks${index + 1}`] || '#82ca9d'}
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        name={`HKS${index + 1}`}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </section>
                <section className="hybridize-key-service-test-results-timestamp-logs-section">
                    <h3>{hybridize.testResults.eventLog.cardTitle}</h3>
                    <p>
                        {hybridize.testResults.eventLog.countLabel}:{' '}
                        {hybridizeKeyServiceTestResultsState.timestamps_logs.length}
                    </p>
                    <div className="animation-list-container">
                        {hybridizeKeyServiceTestResultsState.timestamps_logs.map(
                            (timestampLog, index) => (
                                <div key={index} className="animation-list-item">
                                    <span
                                        className="animation-list-tag"
                                        style={{
                                            backgroundColor:
                                                KMS_COLORS[timestampLog.kms] || '#8884d8',
                                        }}
                                    >
                                        {timestampLog.kms.toUpperCase()}
                                    </span>
                                    <span className="animation-list-time">
                                        {timestampLog.relative_time.toFixed(4)}s
                                    </span>
                                    <span className="animation-list-text">
                                        {timestampLog.event.replace(/_/g, ' ')}
                                    </span>
                                </div>
                            ),
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
