import React, {useState} from 'react';
import {DatePicker, Space, Button, Spin, message} from 'antd';
import axios from 'axios'; // or use 'fetch' if you prefer
import moment, {Moment} from 'moment';

const {RangePicker} = DatePicker;

function App() {
    const [dates, setDates] = useState<Moment[]>([]);
    const [loading, setLoading] = useState(false);

    // @ts-ignore
    const handleDateChange = (dates) => {
        setDates(dates);
    };

    const handleButtonClick = () => {
        if (dates.length === 2) {
            setLoading(true); // Начало загрузки

            const startDate = dates[0].format('YYYY-MM-DD');
            const endDate = dates[1].format('YYYY-MM-DD');

            // Формирование URL для GET-запроса с параметрами
            const url = `http://localhost:8080/api/report?startDate=${startDate}&endDate=${endDate}`;

            axios.get(url)
                .then(response => {
                    console.log('Date range sent successfully', response);
                    message.success('Отчет отправлен'); // Отображение сообщения об успехе
                })
                .catch(error => {
                    console.error('Error sending date range', error);
                    message.error('Ошибка при отправке отчета'); // Отображение сообщения об ошибке
                })
                .finally(() => {
                    setLoading(false); // Окончание загрузки независимо от результата
                });
        } else {
            console.error('Please select a date range');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid">
                <div className="text-center mb-4">Отчет для КРИФ</div>
                <div>
                    <Spin spinning={loading}>
                        <Space direction="horizontal" size={12}>
                            <RangePicker onChange={handleDateChange} inputReadOnly/>
                            <Button type="default" onClick={handleButtonClick} disabled={loading}>
                                Отправить отчет
                            </Button>
                        </Space>
                    </Spin>
                </div>
            </div>
        </div>
    );
}

export default App;
