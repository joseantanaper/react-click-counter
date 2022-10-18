import '../style/Counter.css';

function Counter({ clicksNum }) {
  return (
    <div className='react-counter'>
      {clicksNum}
    </div>
  );

}

export default Counter;