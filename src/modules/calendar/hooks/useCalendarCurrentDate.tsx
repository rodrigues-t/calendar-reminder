import { useSelector } from "react-redux";
import { ICalendarState } from "../store/reducer";

const useCalendarCurrentDate = () => {
    const selectedYear = useSelector((state: ICalendarState) => state.selectedYear);
    const selectedMonth = useSelector((state: ICalendarState) => state.selectedMonth);
    const selectedDay = useSelector((state: ICalendarState) => state.selectedDay);

    const currentDate = new Date(selectedYear, selectedMonth, selectedDay ?? undefined);

    const currentFormatedDate = 
      new Date(selectedYear, selectedMonth, selectedDay ?? undefined).toLocaleDateString('en-US');
    
    return { 
        currentDate,
        currentFormatedDate,
     };
}

export default useCalendarCurrentDate;
