import { NextPage } from 'next';
import styles from './slideIframe.module.scss';

interface Props {
  src: string;
  width: number;
  height: number;
}

const SlideIframe: NextPage<Props> = ({ src, width, height }: Props) => {
  return (
    <div>
      <iframe
        src={src}
        loading='lazy'
        className={styles.iframe}
        frameBorder='0'
        allowFullScreen={true}
        style={{
          width: `${width}px`,
          maxWidth: '100%',
          aspectRatio: `${width / height}`,
        }}
        data-testid='slide_iframe'
      />
    </div>
  );
};

export default SlideIframe;
