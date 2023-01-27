import { NextPage } from 'next';

interface Props {
  title: string;
  help?: string;
}

const PageTitle: NextPage<Props> = ({ title, help }) => {
  return (
    <>
      <h1 className='title' data-testid='title'>
        {title}
      </h1>
      {!!help && <p className='help'>{help}</p>}
    </>
  );
};

export default PageTitle;
