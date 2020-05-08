useEffect(() => {
    const interval = setInterval(() => {
      if (moment(props.timeObject).format("HH:mm") <= props.clock) {
        setClassedPassed(true);
      } else {
        setClassedPassed(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div style={{ opacity: classedPassed ? "1" : "0.3" }} className={"class"}>
      <div className="class__dot"></div>
      <p className="class__info">
        {props.classType} - {props.timeString} - {props.coach}
      </p>
    </div>
  );
};
