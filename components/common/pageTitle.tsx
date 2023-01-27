import { NextPage } from 'next';

interface Props {
  title: string;
  help?: string;
}

const PageTitle: NextPage<Props> = ({ title, help }) => {
  return (
    <section className='section'>
      <h1 className='title' data-testid='title'>
        {title}
      </h1>
      {!!help && <p className='help'>{help}</p>}
    </section>
  );
};

export default PageTitle;
