import { NextPage } from "next"

interface Props {
  id: string,
  title: string,
  url: string,
  shareCount: number,
  iframeSrc: string,
}

const Slide: NextPage<Props> = (props: Props) => {
  return (
    <div data-testid="slide">
      <p className="mb-3">
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="has-text-dark has-text-weight-bold" data-testid="slide_title">{props.title}</a>
        <span className="tag help is-rounded is-info is-light ml-2" data-testid="slide_share_count">{props.shareCount} tweets</span>
      </p>
      <div>
        <iframe
          src={props.iframeSrc}
          frameBorder="0"
          data-testid="slide_iframe"
        />
        <script async data-id={props.id} src="//speakerdeck.com/assets/embed.js" />
      </div>
    </div>
  )
}

export default Slide

{/* <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/9fdff15ab065434fb1ad97a6a673cf88" title="チームが前に進むために、 私が取り組んできたいくつかのこと" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 560px; height: 314px;" data-ratio="1.78343949044586"></iframe> */}

{/* <script async class="speakerdeck-embed" data-id="9fdff15ab065434fb1ad97a6a673cf88" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script> */}