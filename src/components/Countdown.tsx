import React, { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const targetDate = new Date('September 27, 2025 00:00:00 GMT-0400');

const Countdown: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>({});
    const [isPast, setIsPast] = useState<boolean>(false);

    const calculateTimeLeft = (): TimeLeft | {} => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();
        
        if (difference <= 0) {
            setIsPast(true);
            return {};
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (isPast) {
        return (
            <div className="text-center text-4xl font-bold text-red-400">
                ¡El evento ha comenzado!
            </div>
        );
    }

    if (!('days' in (timeLeft as TimeLeft))) {
        return (
            <div className="text-center text-4xl font-bold text-white">
                Calculando...
            </div>
        );
    }
    
    const timeDisplay = timeLeft as TimeLeft;

    const renderTimeCircle = (label: string, value: number) => {
        const paddedValue = value.toString().padStart(2, '0');
        return (
            <div className="flex flex-col items-center">
                <div className="
                    relative 
                    flex items-center justify-center 
                    w-40 h-40 
                    rounded-full 
                    border-4 border-cyan-600 
                    shadow-glow 
                    bg-black/20
                    ">
                    <span className="text-6xl font-black text-white">{paddedValue}</span>
                </div>
                <div className="mt-4 text-xl font-bold uppercase text-white">{label}</div>
            </div>
        );
    };

    return (
        <div className="flex justify-center items-center space-x-8">
            {renderTimeCircle('Días', timeDisplay.days)}
            <div className="text-4xl font-black text-white">:</div>
            {renderTimeCircle('Horas', timeDisplay.hours)}
            <div className="text-4xl font-black text-white">:</div>
            {renderTimeCircle('Minutos', timeDisplay.minutes)}
            <div className="text-4xl font-black text-white">:</div>
            {renderTimeCircle('Segundos', timeDisplay.seconds)}
        </div>
    );
};

export default Countdown;