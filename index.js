const Box = (props) => {
  const { className, message } = props;
  return (
    <div className={className}>
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="boxes-bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box" message="Small" />
      <Box className="medium-box" message="Medium" />
      <Box className="large-box" message="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
