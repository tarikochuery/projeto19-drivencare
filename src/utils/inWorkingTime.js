import dayjs from 'dayjs';

const WORK_TIME_START = 8;
const WORK_TIME_END = 18;

const inWorkingTime = (date) => {
  const dateHour = dayjs(date).get('hour');
  return dateHour >= WORK_TIME_START && dateHour <= WORK_TIME_END;
};

export default inWorkingTime;