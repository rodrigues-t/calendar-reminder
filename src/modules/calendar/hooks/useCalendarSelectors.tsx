import { useSelector } from "react-redux";
import { ICalendarState } from "../store/reducer";

const useCalendarSelectors = () => {
    const selectedYear = useSelector((state: ICalendarState) => state.selectedYear);
    const selectedMonth = useSelector((state: ICalendarState) => state.selectedMonth);
    const selectedDay = useSelector((state: ICalendarState) => state.selectedDay);
    const reminders = useSelector((state: ICalendarState) => state.reminders);

    return { 
        selectedDay, 
        selectedMonth, 
        selectedYear,
        reminders,
     };
}

export default useCalendarSelectors;
