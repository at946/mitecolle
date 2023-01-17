import { NextPage } from 'next';

interface Props {
  message: string
}

const Message: NextPage<Props> = ({ message }) => {
  return (
    <section className="section pb-0">
      <div className="message is-danger" data-testid="message">
        <div className="message-body">
          { message }
        </div>
      </div>
    </section>
  );
};

export default Message;
