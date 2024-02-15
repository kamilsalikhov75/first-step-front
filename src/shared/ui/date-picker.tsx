import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { format } from "date-fns";
import { cn } from "shared/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./calendar";
import { ru } from "date-fns/locale";

const DAY_MILLISECONDS = 24 * 60 * 60 * 1000;

export interface DatePickerProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          className={cn(
            "w-[280px] justify-start text-left font-normal bg-green-100 border border-green-500",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "PPP", { locale: ru })
          ) : (
            <span>Выберите дату</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          locale={ru}
          disabled={(date) =>
            date > new Date(new Date().valueOf() + DAY_MILLISECONDS * 10) ||
            date < new Date(new Date().valueOf()) ||
            date.getDay() === 0 ||
            date.getDay() === 6
          }
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
