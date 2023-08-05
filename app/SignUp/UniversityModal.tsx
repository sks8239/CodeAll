'use client'
import Modal from "./universitystyled";
import { useEffect, useState } from "react";
import axios from "axios";
import { setUniversityRank } from "../../redux/features/univRank-slice";
import { useDispatch } from "react-redux";
import Hangul from 'hangul-js';
import {setSelectedUniversity} from "../../redux/features/signUp-slice";

const UniversityModal = ({ isVisible, onClose }: any) => {
    const [universities, setUniversities] = useState<any[]>([]);
    const dispatch = useDispatch();
    const [filterText, setFilterText] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("/rating/univ");
            console.log(response);
            const univData = Array.from(new Set(response.data.map((item: any) => item.univName)));
            console.log(univData);
            setUniversities(univData);
            dispatch(setUniversityRank(response.data));
            setIsLoading(false);
        } catch (error) {
            console.error("대학정보 가져오기 실패", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isVisible) {

            fetchData();
        }
    }, [dispatch, isVisible]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value);
    };

    const filteredUniversities = universities.filter((universityName) => {
        if (filterText === '') {
            return false;
        }

        const initialsOfUniversity = Hangul.d(universityName.toString(), true).flat().join('');
        const initialsOfFilterText = Hangul.d(filterText, true).flat().join('');

        // 검색어가 대학 이름에 포함되는지 확인합니다.
        return initialsOfUniversity.includes(initialsOfFilterText);
    });

    if (!isVisible) {
        return null;
    }

    const handleUniversityClick = (universityName: string) => {
        dispatch(setSelectedUniversity(universityName));
        onClose();
    };

    return (
        <Modal>
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-content">
                        <input
                            type="text"
                            placeholder="대학교 검색"
                            value={filterText}
                            onChange={handleFilterChange}
                        />
                        <div>
                            <div className="univ-button-container">
                            {filteredUniversities.map((universityName, index) => (
                                <button
                                    key={index}
                                    className="univ-button"
                                    onClick={() => handleUniversityClick(universityName)}
                                >
                                    {universityName}
                                </button>
                            ))}
                            </div>
                        </div>
                        <button onClick={onClose}>모달 닫기</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default UniversityModal;
