const Duration = ({ minutes }) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return (
    <span>
      {hours > 0 && `${hours}h`} {mins > 0 && `${mins}m`}
    </span>
  );
};

export default Duration;
