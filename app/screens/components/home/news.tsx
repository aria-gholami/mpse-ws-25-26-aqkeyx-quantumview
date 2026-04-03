import React, { useEffect, useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useTranslations } from '~/i18n/useTranslations';
import { useNavigate } from 'react-router';
import type { CMSLandingpageState, NewsDetails } from '~/features/cmsLandingpage/state/Initial';
import '../../../shared/styles/screens/home.css';
import { useAppSelector } from '~/redux/hooks';

export default function News() {
    const { home, pagination } = useTranslations();
    const cmsLandingpageState: CMSLandingpageState = useAppSelector(
        (state) => state.cmsLandingpage,
    );
    const navigate = useNavigate();

    const ITEMS_PER_PAGE = 3;
    const [page, setPage] = useState(0);

    useEffect(() => {
        setPage(0);
    }, [cmsLandingpageState.news.length]);

    const pageCount = Math.ceil(cmsLandingpageState.news.length / ITEMS_PER_PAGE);

    const currentNews = useMemo(() => {
        const start = page * ITEMS_PER_PAGE;
        return cmsLandingpageState.news.slice(start, start + ITEMS_PER_PAGE);
    }, [cmsLandingpageState.news, page]);

    return (
        <>
            <section className="news-container">
                {currentNews.map((value: NewsDetails, indexOnPage: number) => {
                    const absoluteIndex = page * ITEMS_PER_PAGE + indexOnPage;

                    return (
                        <article
                            className={value.newsLink ? 'news-container-clickable-article' : ''}
                            key={absoluteIndex}
                            onClick={() => {
                                if (value.newsLink) {
                                    navigate(`/news?details=${absoluteIndex}`);
                                }
                            }}
                        >
                            <span>
                                {value.date} · {value.category}
                            </span>
                            <h4 className="mt-1 tracking-tight font-bold">{value.title}</h4>
                            <p>{value.description}</p>
                            <p>
                                {home.news.hostLabel}:{' '}
                                <span className="font-semibold">{value.host}</span>
                            </p>
                        </article>
                    );
                })}
            </section>

            {pageCount > 1 && (
                <ReactPaginate
                    pageCount={pageCount}
                    forcePage={page}
                    onPageChange={(e) => setPage(e.selected)}
                    previousLabel={pagination.previousPage}
                    nextLabel={pagination.nextPage}
                    breakLabel="…"
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    containerClassName="pagination-container"
                    pageClassName="list-none"
                    pageLinkClassName="pagination-page-link"
                    activeLinkClassName="pagination-active-link"
                    previousClassName="list-none"
                    nextClassName="list-none"
                    previousLinkClassName="pagination-previous-link"
                    nextLinkClassName="pagination-next-link"
                    disabledLinkClassName="pagination-disabled-link"
                    breakClassName="list-none"
                    breakLinkClassName="pagination-break-link"
                />
            )}
        </>
    );
}
