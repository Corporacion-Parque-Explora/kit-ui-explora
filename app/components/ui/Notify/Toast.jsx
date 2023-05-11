const Toast = ({ msg, handleShow, bgColor }) => (
  <div
    className={`toast show position-fixed text-light ${bgColor}`}
    style={{
      top: '80%',
      right: '5px',
      zIndex: 2000,
      minWidth: '280px',
      transition: 'all .5s',
    }}
    onClick={handleShow}
  >
    <div className={`notification is-size-4 ${bgColor}`}>{msg.msg}</div>
  </div>
);

export default Toast;
