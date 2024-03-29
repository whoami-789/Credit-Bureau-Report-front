import React, {useState} from 'react';
import {DatePicker, Space, Button, Spin, message, Input} from 'antd';
import axios from 'axios';
import {RangeValue} from 'rc-picker/lib/interface';
import dayjs, {Dayjs} from 'dayjs'; // Импортируем `dayjs` вместо `moment`

const {RangePicker} = DatePicker;

// Обновляем типы для использования Dayjs
const App: React.FC = () => {
    const [dates, setDates] = useState<[Dayjs, Dayjs] | []>([]);
    const [numdog, setNumdog] = useState<string>('');
    const [kodchlen, setClient] = useState<string>('');
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

    const handleInputChangeClient = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClient(e.target.value);
    };

    const handleButtonClick = () => {
        if (dates.length === 2) {
            setLoading(true);

            const startDate = dates[0].format('YYYY-MM-DD');
            const endDate = dates[1].format('YYYY-MM-DD');

            const url = `http://localhost:5050/api/report?startDate=${startDate}&endDate=${endDate}`;

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
    const handleDataDogClick = () => {
        if (dates.length === 2) {
            setLoading(true);

            const startDate = dates[0].format('YYYY-MM-DD');
            const endDate = dates[1].format('YYYY-MM-DD');

            const url = `http://localhost:5050/api/report/datadog?startDate=${startDate}&endDate=${endDate}`;

            axios.get(url, { responseType: 'blob' }) // Указываем тип ответа как 'blob'
                .then(response => {
                    const blob = new Blob([response.data]); // Создаем объект Blob из полученных данных
                    const url = URL.createObjectURL(blob); // Создаем URL из Blob
                    const link = document.createElement('a'); // Создаем ссылку для скачивания файла
                    link.href = url;
                    link.setAttribute('download', 'report.zip'); // Устанавливаем имя файла для скачивания
                    document.body.appendChild(link); // Добавляем ссылку на страницу
                    link.click(); // Имитируем клик по ссылке для скачивания файла
                    message.success('Отчет успешно скачан');
                })
                .catch(error => {
                    console.error('Error downloading report', error);
                    message.error('Ошибка при скачивании отчета');
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

            const url = `http://localhost:5050/api/report/numdog?startDate=${startDate}&endDate=${endDate}&numdog=${numdog}`;

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
    const handleButtonClickWithClient = () => {
        if (kodchlen) { // Проверка наличия кода клиента
            setLoading(true);

            // Формирование URL для GET-запроса, включая только kodchlen
            const url = `http://localhost:5050/api/report/client?kodchlen=${kodchlen}`;

            axios.get(url)
                .then(response => {
                    console.log('Data with kodchlen sent successfully', response);
                    message.success('Отчет с кодом клиента отправлен успешно');
                })
                .catch(error => {
                    console.error('Error sending data with kodchlen', error);
                    message.error('Ошибка при отправке отчета с кодом клиента');
                })
                .finally(() => {
                    setLoading(false); // Окончание процесса загрузки
                });
        } else {
            message.error('Пожалуйста, введите код клиента');
        }
    };


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid gap-4">
                <div className="text-center mb-4">Отчет для КРИФ</div>
                <Spin spinning={loading}>
                    <Space direction="vertical" size={12} style={{display: 'flex'}}>
                        <RangePicker onChange={(dates) => handleDateChange(dates)} inputReadOnly/>
                        <Button type="default" onClick={handleButtonClick} disabled={loading || dates.length < 2}>
                            Отправить отчет по дате изменения кредита
                        </Button>
                        <Button type="default" onClick={handleDataDogClick} disabled={loading || dates.length < 2}>
                            Отправить отчет по дате создания кредита
                        </Button>
                        <Input placeholder="Номер договора" onChange={handleInputChange} value={numdog}/>
                        <Button type="default" onClick={handleButtonClickWithNumdog}
                                disabled={loading || dates.length < 2 || !numdog}>
                            Отправить отчет с номером договора
                        </Button>
                        <Input placeholder="Код клиента" onChange={handleInputChangeClient} value={kodchlen}/>
                        <Button type="default" onClick={handleButtonClickWithClient} disabled={loading || !kodchlen}>
                            Отправить отчет с кодом клиента
                        </Button>
                    </Space>
                </Spin>
            </div>
        </div>
    );
};

export default App;
