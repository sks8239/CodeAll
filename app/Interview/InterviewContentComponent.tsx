import React, {useState, useEffect, useRef} from "react";
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
import {RootState, useAppSelector} from "@/redux/store";
import {setLanguageComment, setShowContent} from "@/redux/features/interview-slice";

interface CommentDto {
    id: number;
    nickname: string;
    detail: string;
}

const ContentComponent: React.FC = () => {
    const [userComments, setUserComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState<string>("");
    const [comments, setComments] = useState<CommentDto[]>([]);
    const dispatch = useDispatch();
    const currentPage = useAppSelector((state: RootState) => state.interview.currentPage);
    const languageContent = useAppSelector((state: RootState) => state.interview.languageContent);
    const showContent = useSelector((state: RootState) => state.interview.showContent);
    const exampleComment = useSelector((state: RootState) => state.interview.exampleComment);
    const interviewIds = useSelector((state: RootState) => state.interview.interviewIds);
    const selectLanguage = useSelector((state: RootState) => state.interview.activeLanguage);
    const commentIds:any = useSelector((state: RootState) => state.interview.languageComment);
    const likeCnt = useSelector((state:RootState)=>state.interview.likeCnt);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [editingIndex, setEditingIndex] = useState<number>(-1);
    const [interviewLike, setInterviewLike] = useState<boolean[]>(new Array(interviewIds.length).fill(true));
    const [commentCnt, setcommentCnt] = useState<number>(0);
    const accessToken = useSelector((state:RootState)=>state.login.accessToken)
    const isAuthenticated = !!accessToken;
    const currentUserNickName =  useSelector((state:RootState)=>state.login.currentUserNickName)
    const [likedCommentIds, setLikedCommentIds] = useState<number[]>([]);
    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * 5;
        const endIndex = startIndex + 5;
        return languageContent.slice(startIndex, endIndex);
    };
    const handleNewCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = async (interviewId: number) => {
        if (accessToken) {
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
                                Authorization: `Bearer ${accessToken}`,
                            },
                        }
                    );
                    console.log(response);
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
        dispatch(setShowContent(index, updatedShowContent[index]));
        handleCommentView(interviewId);
    };

    const handleInterviewLikeClick = async (InterviewId: number) => {
        try {
            const currentLikeStatus = interviewLike[InterviewId];
            const newLikeStatus = !currentLikeStatus;
            console.log(currentLikeStatus)
            console.log(newLikeStatus)
            const data = {
                id: InterviewId,
                isLike: newLikeStatus,
            }
            console.log(data)
            const response = await axios.post(`/my-page/interview/is-like`,data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setInterviewLike((prevInterviewLike) => {
                const updatedInterviewLike = [...prevInterviewLike];
                updatedInterviewLike[InterviewId] = newLikeStatus;
                return updatedInterviewLike;
            });
            console.log(response);
        } catch (error) {}
    };

    const handleCommentLikeClick = async (index: number) => {
        try {
            const commentId = commentIds[1][index];
            const isLiked = likedCommentIds.includes(commentId);

            // Send the isLiked (true if not liked, false if liked) to the server
            const response = await axios.post(
                `/my-page/comment/is-like`,
                { id: commentId, isLike: !isLiked },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            // Update likedCommentIds based on the user action and the server response
            if (response.status === 200) {
                setLikedCommentIds((prevLikedCommentIds) =>
                    isLiked ? prevLikedCommentIds.filter((id) => id !== commentId) : [...prevLikedCommentIds, commentId]
                );
            }

            console.log(response);
        } catch (error) {
            console.error("댓글 좋아요 업데이트 실패:", error);
        }
    };


    const handleDeleteComment = async (index: number) => {
        try {
            const response = await axios.get(`/my-page/delete-comment`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                params: {
                    commentId: commentIds[1][index],
                },
            });
            if (response.status === 200) {
                alert("댓글이 삭제되었습니다");
                interviewIds.forEach((interviewId) => {
                    handleCommentView(interviewId);
                });
            }
        } catch (error: any) {
            console.log("에러떴지롱");
        }
    };


    const handleEditComment = (index: number) => {
        setUserComments((prevUserComments) => {
            const updatedComments = [...prevUserComments];
            updatedComments[index] = comments.find((comment) => comment.id === interviewIds[index])?.detail || "";
            return updatedComments;
        });

        setEditingIndex(index);
    };

    const handleChangeComment = async (index: number) => {
        try {

            const updatedComment = userComments[index];
            const data = {
                id: commentIds[1][index],
                detail: updatedComment,
            }
            console.log(data);
            const response = await axios.post(`/my-page/change-comment`,data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.status === 200) {
                alert("댓글이 수정되었습니다");
                console.log(interviewIds[index])
                interviewIds.forEach((interviewId) => {
                    handleCommentView(interviewId);
                });
            }
        } catch (error: any) {
            console.log(error)
        }
    };

    const handleCommentView = async (interviewId: number) => {
        try {
            const response = await axios.get(`/inter-view/comment/${interviewId}`);
            console.log(response.data.map((item:any)=>item.likeCnt));
            console.log(response.data.map((item:any)=>item.id));
            const commentsWithNickname = response.data.map((comment: CommentDto, index: number) => ({
                ...comment,
                nickname: response.data[index].nickName,
                id: response.data[index].interViewId,
            }));
            setcommentCnt(response.data.length);
            setComments((prevComments) => {
                // 해당 인터뷰에 대한 댓글들만 필터링하여 가져옴
                const filteredComments = prevComments.filter((comment) => comment.id !== interviewId);
                // 이전 댓글들과 새로운 댓글들을 병합하여 중복을 방지하고 반환
                return [...filteredComments, ...commentsWithNickname];
            });
            const commentIds = response.data.map((item: any) => item.id);
            const comment = [selectLanguage, commentIds];
            console.log(comment)
            // console.log(comment);
            dispatch(setLanguageComment(comment));
        } catch (error) {
            console.error("Error", error);
        }
    };
    const handleInputBlur = () => {
        setTimeout(() => {
            setEditingIndex(-1);
        }, 100);

    };
    useEffect(() => {
        interviewIds.forEach((interviewId) => {
            handleCommentView(interviewId);
        });
    }, [interviewIds]);

    useEffect(()=>{

    },[interviewLike])

    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, userComments.length);
        const currentRef = inputRefs.current[userComments.length - 1];
        if (currentRef) {
            currentRef.focus();
        }
    }, [userComments]);


    return (
        <InterviewWrapper>
            {languageContent &&
                getCurrentPageData().map((content, index) => {
                    const interviewId = interviewIds[index];
                    const exampleAnswer = exampleComment[index];
                    const isContentShown = showContent[index];
                    const interviewComments = comments.filter((comment) => comment.id === interviewId);
                    return (
                        <div key={interviewId}>
                            <div className={`interview-question ${isContentShown ? "show" : ""}`}>
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
                                        {isContentShown ? <ChatText /> : <ChatDots />}{commentCnt}
                                    </button>
                                    <button className="like-cnt" onClick={() => handleInterviewLikeClick(interviewId)}>
                                        <Heart />{likeCnt}
                                    </button>
                                </div>
                                {isContentShown && (
                                    <div className="answer-comments-container">
                                        {exampleAnswer && <p className="example-answer">{"예시답안: " + exampleAnswer}</p>}
                                        {interviewComments.map((comment, index) => (

                                            <div key={`${comment.id}-${comment.detail}-${index}`} className="comment">
                                                {editingIndex === index ? (
                                                    <>
                                                        <input
                                                            type="text"
                                                            className="user-comment"
                                                            value={userComments[index]}
                                                            onChange={(e) => setUserComments((prev) => {
                                                                const updatedComments = [...prev];
                                                                updatedComments[index] = e.target.value;
                                                                return updatedComments;
                                                            })}
                                                            onBlur={() => handleInputBlur()}
                                                            ref={(input) => (inputRefs.current[index] = input)}
                                                        />
                                                        <button className="save-comment" onClick={() => handleChangeComment(index)}>
                                                            저장
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div key={`${comment.id}-${comment.detail}-${index}`} className="comment" style={{ display: "flex", alignItems: "center" }}>
                                                            <div className="comments">
                                                                {comment.nickname}: {comment.detail}
                                                            </div>
                                                            <div className="button-containers">
                                                                {isAuthenticated && currentUserNickName === comment.nickname && (
                                                                    <>
                                                                        <button className="change-comment" onClick={() => handleEditComment(index)}>
                                                                            수정
                                                                        </button>
                                                                        <button className="delete-comment" onClick={() => handleDeleteComment(index)}>
                                                                            삭제
                                                                        </button>
                                                                    </>
                                                                )}
                                                                <button className="comment-like-cnt" onClick={() => handleCommentLikeClick(index)}>
                                                                    {likedCommentIds.includes(comment.id) ? <HeartFill /> : <Heart />}
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </>
                                                )}
                                            </div>

                                        ))}
                                        <CommentInputContainer>
                                            <UserCommentInput
                                                type="text"
                                                className="user-comment"
                                                placeholder="댓글을 입력하세요..."
                                                value={newComment}
                                                onChange={handleNewCommentChange}
                                            />
                                            <SubmitCommentButton onClick={() => handleCommentSubmit(interviewId)}>
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