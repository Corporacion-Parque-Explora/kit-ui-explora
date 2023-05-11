import { useDispatch, useSelector } from 'react-redux';
import { createNotify } from '../../../redux/actions/notify';
import Toast from './Toast';

const Notify = () => {
  const notify = useSelector((state) => state.notify.notify);
  const dispatch = useDispatch();

  return (
    <>
      {notify?.error && (
        <Toast
          msg={{ msg: notify.error }}
          handleShow={() => dispatch(createNotify({}))}
          bgColor="bg-04"
        />
      )}

      {notify?.success && (
        <Toast
          msg={{ msg: notify.success }}
          handleShow={() => dispatch(createNotify({}))}
          bgColor="bg-03"
        />
      )}
    </>
  );
};

export default Notify;
