'use client'
import React from "react";
import Pagination from "react-js-pagination";
import {PaginationWrapper} from "./InterviewStyledComponent";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "@/redux/features/interview-slice";
import {RootState} from "@/redux/store";



const InterviewPaginationComponent: React.FC = () => {
    const dispatch = useDispatch();
    const activeLanguage = useSelector(
        (state: RootState) => state.interview.activeLanguage
    );
    const currentPage = useSelector(
        (state: RootState) => state.interview.currentPage
    );
    const languageContent = useSelector(
        (state: RootState) => state.interview.languageContent
    );
    const handlePageChange = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber));
    };

    return (
                    <PaginationWrapper>
                {activeLanguage && (
                    <div className="pagination-container">
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={5}
                            totalItemsCount={languageContent.length}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                            itemClass="pagination-item"
                            activeClass="active"
                            prevPageText={"‹"}
                            nextPageText={"›"}
                        />
                    </div>
                )}
            </PaginationWrapper>
    );
};

export default InterviewPaginationComponent;
