import React, {useEffect, useRef, useState} from "react";
import { ArrowUpCircle, ArrowDownCircle, DashCircle } from "react-bootstrap-icons";
import {
    DownRankIcon,
    NotChangeIcon,
    RankChangeNumber,
    RankChangeWrapper,
    RankStyledComponent,
    UpRankIcon
} from "./RankStyledComponent";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";




const IndividualRankView: React.FC = () => {
    const rankData = useSelector((state: RootState) => state.individual.individualRank);
    console.log(rankData);
    const [searchValue, setSearchValue] = useState("");
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const tableRef = useRef<HTMLTableElement|null>(null);

    useEffect(() => {
        // 검색어 변경 시 스크롤 위치와 테두리 표시 초기화
        setHighlightedIndex(-1);
    }, [searchValue]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        const index = rankData.findIndex((data) => data.userName === searchValue);
        if (index !== -1) {
            setHighlightedIndex(index);
            const rowElement = tableRef.current?.rows[index + 1];
            if (rowElement) {
                rowElement.scrollIntoView({ behavior: "smooth",block: "center"  });
            }
        }
    };

    return (
        <>
            <RankStyledComponent>
                <h2>개인 랭크</h2>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="닉네임 검색"
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                    <button onClick={handleSearch}>검색</button>
                </div>
                <table className="rank-table" ref={tableRef}>
                    <thead>
                    <tr>
                        <th className="rank-table-header">등수</th>
                        <th className="rank-table-header">유저명</th>
                        <th className="rank-table-header">랭크 변화</th>
                        <th className="rank-table-header">점수</th>
                        <th className="rank-table-header">랭크</th>
                        <th className="rank-table-header">평균 점수</th>
                        <th className="rank-table-header">학교명</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rankData.map(
                        (
                            { userName, prevRank, score, rankName, avg, univName },
                            index
                        ) => (
                            <tr
                                key={index}
                                className={`${
                                    index === highlightedIndex ? "highlighted-row" : ""
                                } ${index % 2 === 0 ? "even-row" : "odd-row"}`}
                            >
                                <td>{index + 1}</td>
                                <td>{userName}</td>
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
                                <td>{avg}</td>
                                <td>{univName}</td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </RankStyledComponent>
        </>
    );
};

export default IndividualRankView;