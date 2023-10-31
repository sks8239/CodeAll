import React, {useState, useEffect, useRef, useCallback} from "react";
import {
    DownRankIcon,
    NotChangeIcon,
    RankChangeNumber,
    RankChangeWrapper,
    RankStyledComponent,
    UpRankIcon,
} from "./RankStyledComponent";
import { ArrowUpCircle, ArrowDownCircle, DashCircle } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import {RootState} from "@/redux/store";

const SchoolRankView: React.FC = () => {
    const rankData = useSelector((state: RootState) => state.univ.universityRank);
    console.log(rankData);
    const [searchValue, setSearchValue] = useState("");
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const tableRef = useRef<HTMLTableElement|null>(null);

    const handleSearch = useCallback(() => {
        const index = rankData.findIndex((data) => data.univName === searchValue);
        if (index !== -1) {
            setHighlightedIndex(index);
            const rowElement = tableRef.current?.rows[index + 1];
            if (rowElement) {
                rowElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    }, [rankData,searchValue]);



    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };
    return (
        <>
            <RankStyledComponent>
                <h2>학교 랭크</h2>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="대학 이름 검색"
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                    <button onClick={handleSearch}>검색</button>
                </div>
                <table className="rank-table" ref={tableRef}>
                    <thead>
                    <tr>
                        <th className="rank-table-header">등수</th>
                        <th className="rank-table-header">학교</th>
                        <th className="rank-table-header">랭크 변화</th>
                        <th className="rank-table-header">점수</th>
                        <th className="rank-table-header">랭크</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rankData.map(
                        (
                            { univName, prevRank, score, rankName, averageScore, userNumber },
                            index
                        ) => (
                            <tr
                                key={index}
                                className={`${
                                    index === highlightedIndex ? "highlighted-row" : ""
                                } ${index % 2 === 0 ? "even-row" : "odd-row"}`}
                            >
                                <td>{index + 1}</td>
                                <td>{univName}</td>
                                <td>
                                    <RankChangeWrapper>
                                        {prevRank-(index + 1) > 0 ? (
                                            <UpRankIcon className="upRank" />
                                        ) : prevRank-(index + 1) < 0 ? (
                                            <DownRankIcon className="downRank" />
                                        ) : (
                                            <NotChangeIcon className="notChange" />
                                        )}
                                        <RankChangeNumber>
                                            {Math.abs(prevRank-(index + 1))}
                                        </RankChangeNumber>
                                    </RankChangeWrapper>
                                </td>
                                <td>{score}</td>
                                <td>{rankName}</td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </RankStyledComponent>
        </>
    );
};

export default SchoolRankView;
