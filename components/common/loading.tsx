import { NextPage } from 'next';
import Motion from './motion';

const Loading: NextPage = () => {
  return (
    <Motion>
      <div
        className='is-flex is-justify-content-center is-align-items-center'
        style={{ height: '100vh' }}
      >
        <progress className='progress is-large is-primary' style={{ width: '300px' }} max='100'>
          0
        </progress>
      </div>
    </Motion>
  );
};

export default Loading;
