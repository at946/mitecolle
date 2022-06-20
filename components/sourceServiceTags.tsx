import { NextPage } from 'next';
import SourceServiceTag from './sourceServiceTag';

const SourceServiceTags: NextPage = () => {
  return (
    <div>
      <SourceServiceTag serviceName='Docswell' url='https://www.docswell.com' />
      <SourceServiceTag serviceName='SlideShare' url='https://www.slideshare.net' />
      <SourceServiceTag serviceName='Speaker Deck' url='https://speakerdeck.com' />
    </div>
  );
};

export default SourceServiceTags;
