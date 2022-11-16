import { NextPage } from 'next';
import { useState } from 'react';

const KeywordSearch: NextPage = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <section className='section pb-0'>
      <div className='container'>
        <div className='field is-grouped'>
          <div className='control is-expanded'>
            <input
              type='text'
              className='input'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder='タイトルとハッシュタグで検索できます'
              data-testid='keywordInput'
            />
          </div>
          <div className='control'>
            <button
              className='button is-primary'
              data-testid='keywordSearchButton'
              disabled={!keyword.trim()}
            >
              検索
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordSearch;
