import { NextPage } from 'next';

interface Props {
  title: string,
  help?: string,
}

const PageTitle: NextPage<Props> = ({title, help}) => {
  return (
    <div className='section has-text-centered pb-0'>
      <div className='container'>
        <h1 className='title' data-testid='title'>
          {title}
        </h1>
        { !!help && (
          <p className='help'>{help}</p>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
