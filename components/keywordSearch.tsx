import { NextPage } from "next";

const KeywordSearch: NextPage = () => {
  return (
    <section className="section pb-0">
      <div className="container">
        <input type="text" className="input is-primary is-rounded" data-testid="keywordInput" placeholder="タイトルとハッシュタグで検索できます" />
      </div>
    </section>
  )
}

export default KeywordSearch;