import { useDispatch } from "react-redux";
import { 
    updateDay as calendarUpdateDay,
    addReminder as calendarAddReminder,
} from "../store/action";
import { Reminder } from "../models/Remider";

const useCalendarActions = () => {
    const dispatch = useDispatch();
    const updateDay = (day: number | null) => dispatch(calendarUpdateDay(day));
    const addReminder = (reminder: Reminder) => dispatch(calendarAddReminder(reminder));

    return { updateDay, addReminder };
}

export default useCalendarActions;
