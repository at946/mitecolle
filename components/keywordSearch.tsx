import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { keyword } from '../interfaces/keyword';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { setKeyword } from '../store/keywordSlice';

const KeywordSearch: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const keyword: keyword = useAppSelector((state) => state.keyword.keyword);

  const search = (): void => {
    router.push(`?keyword=${keyword}`);
  };

  const keyDownOnKeywordInput = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return;
    search();
  };

  return (
    <section className='section pb-0'>
      <div className='container'>
        <div className='field is-grouped'>
          <div className='control is-expanded'>
            <input
              type='text'
              className='input'
              value={keyword}
              onChange={(e) => dispatch(setKeyword(e.target.value))}
              onKeyDown={keyDownOnKeywordInput}
              placeholder='タイトルとハッシュタグで検索できます'
              data-testid='keywordInput'
            />
          </div>
          <div className='control'>
            <button
              className='button is-primary'
              data-testid='keywordSearchButton'
              onClick={search}
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
