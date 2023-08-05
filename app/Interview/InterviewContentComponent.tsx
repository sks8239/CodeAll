'use client'
import React, { useState, useEffect } from "react";
import {
    CommentInputContainer,
    InterviewWrapper,
    SubmitCommentButton,
    UserCommentInput,
} from "./InterviewStyledComponent";
import {
    Heart,
    HeartFill,
    ChatDots,
    ChatText,
    PinAngleFill,
} from "react-bootstrap-icons";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import {setShowContent} from "@/redux/features/interview-slice";
import {AppDispatch, RootState} from "@/redux/store";

interface CommentDto {
    id: number;
    nickname: string;
    detail: string;
}


const ContentComponent: React.FC = () => {
    const [userComments, setUserComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState<string>("");
    const [comments, setComments] = useState<CommentDto[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    const currentPage = useSelector(
        (state: RootState) => state.interview.currentPage
    );
    const languageContent = useSelector(
        (state: RootState) => state.interview.languageContent
    );
    const showContent = useSelector(
        (state: RootState) => state.interview.showContent
    );
    const exampleComment = useSelector(
        (state: RootState) => state.interview.exampleComment
    );
    const interviewIds = useSelector(
        (state: RootState) => state.interview.interviewIds
    );

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * 5;
        const endIndex = startIndex + 5;
        return languageContent.slice(startIndex, endIndex);
    };

    const handleNewCommentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = async (interviewId: number) => {
        if (sessionStorage.getItem("accessToken")) {
            const comment = newComment;

            if (comment) {
                try {
                    const response = await axios.post(
                        `/my-page`,
                        {
                            detail: comment,
                            interViewId: interviewId,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
                            },
                        }
                    );

                    if (response.status === 200) {
                        setNewComment("");
                        handleCommentView(interviewId); // 등록 후 바로 댓글 보기 갱신
                    }
                } catch (error) {
                    console.error("댓글 등록 실패:", error);
                }
            }
        } else {
            alert("로그인 후 이용 가능합니다.");
        }
    };


    const handleInterviewClick = (interviewId: number, index: number) => {
        const updatedShowContent = [...showContent];
        updatedShowContent[index] = !updatedShowContent[index];
        dispatch(setShowContent(index,updatedShowContent[index]));
        handleCommentView(interviewId);
    };

    const handleLikeClick = () => {};

    const handleCommentView = async (interviewId: number) => {
        try {
            const response = await axios.get(`/inter-view/comment/${interviewId}`);
            const commentsWithNickname = response.data.map(
                (comment: CommentDto, index: number) => ({
                    ...comment,
                    nickname: response.data[index].nickName,
                    id: response.data[index].interViewId,
                })
            );
            setComments((prevComments) => {
                // 해당 인터뷰에 대한 댓글들만 필터링하여 가져옴
                const filteredComments = prevComments.filter(
                    (comment) => comment.id !== interviewId
                );
                // 이전 댓글들과 새로운 댓글들을 병합하여 중복을 방지하고 반환
                return [...filteredComments, ...commentsWithNickname];
            });
        } catch (error) {
            console.error("Error", error);
        }
    };


    useEffect(() => {
        interviewIds.forEach((interviewId) => {
            handleCommentView(interviewId);
        });
    }, [currentPage, interviewIds]);

    return (
        <InterviewWrapper>
            {languageContent &&
                getCurrentPageData().map((content, index) => {
                    const interviewId = interviewIds[index];
                    const exampleAnswer = exampleComment[index];
                    const isContentShown = showContent[index];
                    const interviewComments = comments.filter(
                        (comment) => comment.id === interviewId
                    );
                    return (
                        <div key={interviewId}>
                            <div
                                className={`interview-question ${isContentShown ? "show" : ""}`}
                            >
                                <PinAngleFill
                                    style={{
                                        color: "#965A00",
                                        position: "absolute",
                                        top: "-5%",
                                        left: "0%",
                                        fontSize: "70px",
                                        transform: "rotate(-75deg)",
                                        zIndex: 50,
                                    }}
                                />
                                <p className="question-Title">
                                    {index + 1}. {content}
                                </p>
                                <div className="buttons-container">
                                <button
                                    className="toggle-button"
                                    onClick={() => handleInterviewClick(interviewId, index)}
                                >
                                    {isContentShown ? <ChatText /> : <ChatDots />}
                                </button>

                                <button className="like-cnt">
                                    <Heart />
                                </button>
                                </div>
                                {isContentShown && (
                                    <div className="answer-comments-container">
                                        {exampleAnswer && (
                                            <p className="example-answer">
                                                {"예시답안: " + exampleAnswer}
                                            </p>
                                        )}
                                        {interviewComments.map((comment) => (
                                            <p
                                                key={`${comment.id}-${comment.detail}`}
                                                className="comment"
                                            >
                                                {comment.nickname}: {comment.detail}
                                            </p>
                                        ))}
                                        {userComments[index] && (
                                            <p className="user-added-comment">
                                                {sessionStorage.getItem("accessToken")}:{" "}
                                                {userComments[index]}
                                            </p>
                                        )}
                                        <CommentInputContainer>
                                            <UserCommentInput
                                                type="text"
                                                className="user-comment"
                                                placeholder="댓글을 입력하세요..."
                                                value={newComment}
                                                onChange={handleNewCommentChange}
                                            />
                                            <SubmitCommentButton
                                                onClick={() => handleCommentSubmit(interviewId)}
                                            >
                                                등록하기
                                            </SubmitCommentButton>
                                        </CommentInputContainer>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
        </InterviewWrapper>
    );
};

export default ContentComponent;
