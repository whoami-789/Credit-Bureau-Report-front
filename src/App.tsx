import React, { useState } from 'react';
import { DatePicker, Space, Button, Spin, message, Input } from 'antd';
import axios from 'axios';
import { RangeValue } from 'rc-picker/lib/interface';
import dayjs, { Dayjs } from 'dayjs'; // Импортируем `dayjs` вместо `moment`

const { RangePicker } = DatePicker;

// Обновляем типы для использования Dayjs
const App: React.FC = () => {
    const [dates, setDates] = useState<[Dayjs, Dayjs] | []>([]);
    const [numdog, setNumdog] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleDateChange = (dates: RangeValue<Dayjs>) => {
        if (dates) {
            // Проверяем, что обе даты выбраны
            const [start, end] = dates;
            if (start && end) {
                // Обе даты существуют, обновляем состояние
                setDates([start, end]);
            } else {
                // Одна из дат или обе даты null, сбрасываем состояние
                setDates([]);
            }
        } else {
            // Даты не выбраны (пользователь сбросил выбор), сбрасываем состояние
            setDates([]);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumdog(e.target.value);
    };

    const handleButtonClick = () => {
        if (dates.length === 2) {
            setLoading(true);

            const startDate = dates[0].format('YYYY-MM-DD');
            const endDate = dates[1].format('YYYY-MM-DD');

            const url = `http://localhost:8080/api/report?startDate=${startDate}&endDate=${endDate}`;

            axios.get(url)
                .then(response => {
                    console.log('Date range sent successfully', response);
                    message.success('Отчет по датам отправлен успешно');
                })
                .catch(error => {
                    console.error('Error sending date range', error);
                    message.error('Ошибка при отправке отчета по датам');
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            message.error('Пожалуйста, выберите диапазон дат');
        }
    };

    const handleButtonClickWithNumdog = () => {
        if (dates.length === 2 && numdog) {
            setLoading(true);

            const startDate = dates[0].format('YYYY-MM-DD');
            const endDate = dates[1].format('YYYY-MM-DD');

            const url = `http://localhost:8080/api/report/numdog?startDate=${startDate}&endDate=${endDate}&numdog=${numdog}`;

            axios.get(url)
                .then(response => {
                    console.log('Data with numdog sent successfully', response);
                    message.success('Отчет с номером договора отправлен успешно');
                })
                .catch(error => {
                    console.error('Error sending data with numdog', error);
                    message.error('Ошибка при отправке отчета с номером договора');
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            message.error('Пожалуйста, выберите диапазон дат и введите номер договора');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid gap-4">
                <div className="text-center mb-4">Отчет для КРИФ</div>
                <Spin spinning={loading}>
                    <Space direction="vertical" size={12} style={{ display: 'flex' }}>
                        <RangePicker onChange={(dates) => handleDateChange(dates)} inputReadOnly />
                        <Button type="default" onClick={handleButtonClick} disabled={loading || dates.length < 2}>
                            Отправить отчет по датам
                        </Button>
                        <Input placeholder="Номер договора" onChange={handleInputChange} value={numdog} />
                        <Button type="default" onClick={handleButtonClickWithNumdog} disabled={loading || dates.length < 2 || !numdog}>
                            Отправить отчет с номером договора
                        </Button>
                    </Space>
                </Spin>
            </div>
        </div>
    );
};

export default App;
