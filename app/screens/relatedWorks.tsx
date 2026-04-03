import type { LanguageState } from '~/features/language/state/Initial';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import React, { useEffect, useMemo, useState } from 'react';
import { fetchCMSRelatedWorks } from '~/features/cmsRelatedWorks/reducers/fetchCMSRelatedWorks';
import type {
    CMSRelatedWorksState,
    RelatedWorksDetails,
} from '~/features/cmsRelatedWorks/state/Initial';
import LoadingSpinner from '~/screens/components/elements/loadingSpinner';
import { useTranslations } from '~/i18n/useTranslations';
import '../shared/styles/screens/relatedWorks.css';
import { ArrowOutward } from '@mui/icons-material';
import ReactPaginate from 'react-paginate';

export default function RelatedWorks() {
    const { relatedWorks, pagination } = useTranslations();
    const cmsRelatedWorksState: CMSRelatedWorksState = useAppSelector(
        (state) => state.cmsRelatedWorks,
    );
    const languageState: LanguageState = useAppSelector((state) => state.language);
    const dispatch = useAppDispatch();

    const ITEMS_PER_PAGE = 5;
    const [page, setPage] = useState(0);

    useEffect(() => {
        dispatch(fetchCMSRelatedWorks(languageState.language) as any);
        setPage(0);
    }, [languageState]);

    const pageCount = Math.ceil(cmsRelatedWorksState.relatedWorks.length / ITEMS_PER_PAGE);

    const currentRelatedWorks = useMemo(() => {
        const start = page * ITEMS_PER_PAGE;
        return cmsRelatedWorksState.relatedWorks.slice(start, start + ITEMS_PER_PAGE);
    }, [cmsRelatedWorksState.relatedWorks, page]);

    return (
        <div className="screen-container">
            <section className="card-container mt-10">
                <h1>{relatedWorks.title}</h1>
                <p className="mt-2">{relatedWorks.description}</p>
            </section>

            <hr className="divider" />

            <section>
                {cmsRelatedWorksState.isLoading ? (
                    <LoadingSpinner label={relatedWorks.loading} />
                ) : (
                    <div className="related-works-container">
                        {currentRelatedWorks.map((value: RelatedWorksDetails) => {
                            return (
                                <article className="related-work-article">
                                    <div className="related-work-article-content">
                                        <div>
                                            <h2 className="mb-2">{value.title}</h2>
                                            <div
                                                className="cms-content"
                                                dangerouslySetInnerHTML={{
                                                    __html: value.description,
                                                }}
                                            />

                                            <p className="mt-4">
                                                <span className="author-label">
                                                    {relatedWorks.authorLabel}
                                                </span>{' '}
                                                {value.author}
                                            </p>
                                        </div>
                                        <div className="related-work-link-container">
                                            <a
                                                href={value.relatedWorkLink}
                                                target="_blank"
                                                className="related-work-link"
                                            >
                                                {relatedWorks.openLink}
                                                <ArrowOutward />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
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
                    </div>
                )}
            </section>
        </div>
    );
}
