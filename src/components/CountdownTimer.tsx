import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-background/50 border border-primary/30 rounded-md md:rounded-lg px-2 md:px-3 py-1.5 md:py-2 min-w-[40px] md:min-w-[48px]">
        <span className="text-lg md:text-2xl font-bold text-foreground tabular-nums">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[9px] md:text-xs text-muted-foreground mt-0.5 md:mt-1 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className={`flex items-center gap-1.5 md:gap-3 ${className}`}>
      <TimeBlock value={timeLeft.days} label="dias" />
      <span className="text-primary text-lg md:text-xl font-bold">:</span>
      <TimeBlock value={timeLeft.hours} label="horas" />
      <span className="text-primary text-lg md:text-xl font-bold">:</span>
      <TimeBlock value={timeLeft.minutes} label="min" />
      <span className="text-primary text-lg md:text-xl font-bold">:</span>
      <TimeBlock value={timeLeft.seconds} label="seg" />
    </div>
  );
};

export default CountdownTimer;
