import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { keyword } from '../interfaces/keyword';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { setKeyword } from '../store/keywordSlice';

const KeywordSearch: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const keyword: keyword = useAppSelector((state) => state.keyword.keyword);
  const isSearched: boolean = useAppSelector((state) => state.searchState.isSearched);

  const search = (): void => {
    if (!keyword) return;
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
              data-testid='keyword_input'
            />
          </div>
          <div className='control'>
            <button
              className='button is-primary'
              data-testid='keyword_search_button'
              onClick={search}
              disabled={!keyword.trim()}
            >
              検索
            </button>
          </div>
        </div>
        {isSearched && (
          <div className='has-text-centered'>
            <Link href='/'>
              <a className='button is-ghost' data-testid='cancel_keyword_search_link'>
                検索解除
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default KeywordSearch;
