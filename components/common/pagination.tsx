import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../store/hook';
import { keyword } from '../../interfaces/keyword';

interface Props {
  page: number;
  maxPage: number;
}

const Pagination: NextPage<Props> = ({ page, maxPage }) => {
  const router = useRouter();
  const path = router.asPath.split('?').shift();
  const keyword: keyword = useAppSelector((state) => state.keyword.keyword);

  const createHref = (hrefPage: number): string => {
    let resHref = `${path}?page=${hrefPage}`;
    if (path === '/slides' && !!keyword) {
      resHref += `&keyword=${keyword}`;
    }
    return resHref;
  };

  return (
    <section className='section'>
      <nav className='pagination is-centered is-rounded' role='navigation' aria-label='pagination'>
        {page > 1 ? (
          <Link href={createHref(page - 1)}>
            <a className='pagination-previous' data-testid='pagination_previous'>
              Previous
            </a>
          </Link>
        ) : (
          <span className='pagination-previous is-disabled' data-testid='pagination_previous'>
            Previous
          </span>
        )}

        {page < maxPage ? (
          <Link href={createHref(page + 1)}>
            <a className='pagination-next' data-testid='pagination_next'>
              Next
            </a>
          </Link>
        ) : (
          <span className='pagination-next is-disabled' data-testid='pagination_next'>
            Next
          </span>
        )}

        <ul className='pagination-list'>
          {page > 1 && (
            <li>
              <Link href={createHref(1)}>
                <a className='pagination-link' aria-label='1' data-testid='pagination_link'>
                  1
                </a>
              </Link>
            </li>
          )}
          {page > 2 && (
            <li>
              <span className='pagination-ellipsis'>&hellip;</span>
            </li>
          )}
          <li>
            <span
              className='pagination-link is-current'
              aria-label={String(page)}
              data-testid='pagination_link'
            >
              {page}
            </span>
          </li>
          {page < maxPage - 1 && (
            <li>
              <span className='pagination-ellipsis'>&hellip;</span>
            </li>
          )}
          {page < maxPage && (
            <li>
              <Link href={createHref(maxPage)}>
                <a
                  className='pagination-link'
                  aria-label={String(maxPage)}
                  data-testid='pagination_link'
                >
                  {maxPage}
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;
