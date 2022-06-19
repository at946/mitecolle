import { NextPage } from 'next';
import SourceServiceTag from './sourceServiceTag';

const SourceServiceTags: NextPage = () => {
  return (
    <div>
      <SourceServiceTag serviceName='Speaker Deck' url='https://speakerdeck.com' />
      <SourceServiceTag serviceName='SlideShare' url='https://www.slideshare.net' />
    </div>
  );
};

export default SourceServiceTags;
