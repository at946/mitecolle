import { NextPage } from 'next';

interface Props {
  title: string;
  help?: string;
}

const PageTitle: NextPage<Props> = ({ title, help }) => {
  return (
    <div className='section'>
      <h1 className='title' data-testid='title'>
        {title}
      </h1>
      {!!help && <p className='help'>{help}</p>}
    </div>
  );
};

export default PageTitle;
