

export const timeSinceFed = (lastFed: string) => {
  return Math.floor(
    (new Date().getTime() - new Date(lastFed).getTime()) / (1000 * 60 * 60)
  );
};

export const newTimeDisplay = (currentDate: Date) => {
  let date = currentDate.getDate().toString();
  let year = currentDate.getFullYear().toString();
  let month = (currentDate.getMonth() + 1).toString();
  let hour = currentDate.getHours().toString();
  let minutes = currentDate.getMinutes().toString();
  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }

  return ` ${date}/${month}-${year}  kl:${hour}:${minutes} `;
};
