const timeLogic = (
  timeSend: number,
  end_send: number,
  start_send: number,
  isWork: boolean
) => {
  if (!isWork) {
    return false;
  }

  const currentDate = new Date().getDate();
  if (currentDate === timeSend) {
    return false;
  }
  const currentHour = new Date().getHours();
  if (currentHour < start_send) return false;
  if (currentHour > end_send) return false;
  return true;
};

export { timeLogic };
