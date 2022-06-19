import { NextPage } from 'next';

interface Props {
  serviceName: string;
  url: string;
}

const SourceServiceTag: NextPage<Props> = (props: Props) => {
  return (
    <a
      href={props.url}
      target='_blank'
      rel='noopener noreferrer'
      className='tag is-rounded mx-1'
      data-testid='source_service_tag'
    >
      {props.serviceName}
    </a>
  );
};

export default SourceServiceTag;
