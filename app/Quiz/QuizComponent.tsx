'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
    QuizWrapper,
    QuestionContainer,
    ChoicesContainer,
    StyledButton,
    ProgressFill,
    ProgressBar,
    TimerFill,
    TimerWrapper,
    TimerBar,
    TimerText,
} from './QuizStyledComponent';
import { BugFill, Bug, PinAngleFill } from 'react-bootstrap-icons';
import QuizAnimationComponent from './QuizAnimationComponent';
import {AppDispatch, RootState, useAppSelector} from "@/redux/store";
import {setAnswers, updateScore} from "@/redux/features/quiz-slice";
import {useRouter} from "next/navigation";

const QuizComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const questions = useAppSelector((state: RootState) => state.quiz.questions);
    const score = useAppSelector((state: RootState) => state.quiz.score);
    const answers = useAppSelector((state: RootState) => state.quiz.answers);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState('');
    const [timeLeft, setTimeLeft] = useState(30);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [animationState, setAnimationState] = useState('');
    const [selectedBugs, setSelectedBugs] = useState<number[]>([]);
    const [isAnswering, setIsAnswering] = useState(false);
    const [correctQuestionsId, setCorrectQuestionsId] = useState<number[]>([]);
    const accessToken = useSelector((state:RootState)=>state.login.accessToken)
    const router = useRouter();
    const handleChoiceSelect = (choice: string) => {
        if (!isAnswering) {
            setIsAnswering(true);
            setSelectedChoice(choice);
        }
    };
    const handleNextQuestion = () => {
        if (selectedChoice === '') {
            setSelectedChoice('선택하지 않음');
        }

        const isCorrect = selectedChoice === questions[currentQuestionIndex].correctAnswer;
        dispatch(updateScore(isCorrect ? 5 : 0));
        dispatch(setAnswers([...answers, { answer: selectedChoice, questionId: questions[currentQuestionIndex].questionsId }]));
        setAnimationState(isCorrect ? 'correct' : 'incorrect');

        if (isCorrect) {
            const questionId = questions[currentQuestionIndex].questionsId;
            correctQuestionsId.push(questionId);
        }console.log(correctQuestionsId)

        setTimeout(() => {
            setSelectedChoice('');
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(30);
            setAnimationState('');

            if (isCorrect) {
                setSelectedBugs((prevBugs) => [...prevBugs, currentQuestionIndex]);
            }

            setIsAnswering(false);

            if (currentQuestionIndex === questions.length - 1) {
                sendScoreToServer();
            }
        }, 1000);
    };

    useEffect(() => {
        if (selectedChoice && currentQuestionIndex <= questions.length - 1) {
            handleNextQuestion();
        }
    }, [selectedChoice, currentQuestionIndex]);



    useEffect(() => {
        if (currentQuestionIndex < questions.length) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [currentQuestionIndex]);

    //제한시간 초과시
    useEffect(() => {
        if ((selectedChoice || timeLeft === 0) && currentQuestionIndex === questions.length - 1) {
            // sendScoreToServer();
        } else if (timeLeft === 0) {
            handleNextQuestion();
        }
    }, [timeLeft]);

    const sendScoreToServer = async () => {
        try {
            const data = {
                score : score,
                question : correctQuestionsId,
            }
            const response = await axios.post(`/my-page/score-answer`,data, {
                headers: {
                    Authorization: `Bearer ${accessToken}` // 인증 토큰을 포함하여 요청
                }
            });
            console.log(response);
            console.log(score);
            router.push('/Result');
            // window.location.href = '/Result';
        } catch (error) {
            console.error('서버 요청 실패:', error);
        }
    };

    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    const timePercentage = (timeLeft / 30) * 100;

    return (
        <QuizWrapper>
            <TimerWrapper>
                <PinAngleFill
                    style={{
                        zIndex: 1,
                        color: '#965A00',
                        position: 'absolute',
                        left: '-30%',
                        top: '210%',
                        fontSize: '80px',
                        transform: 'rotate(-75deg)',
                    }}
                />

                <div className="bugs">
                    {[...Array(20)].map((_, index) => (
                        <span
                            key={index}
                            onClick={() => setSelectedBugs((prevBugs) => [...prevBugs, index])}
                        >
                            {currentQuestionIndex < index + 1 ? (
                                <Bug />
                            ) : (
                                <BugFill
                                    style={{
                                        color: selectedBugs.includes(index) ? 'green' : 'red',
                                    }}
                                />
                            )}
                        </span>
                    ))}
                </div>
                <TimerText>
                    {currentQuestionIndex < questions.length && <span>{timeLeft}s</span>}
                </TimerText>
                <TimerBar>
                    <TimerFill timePercentage={timePercentage} />
                </TimerBar>
            </TimerWrapper>

            <ProgressBar>
                <ProgressFill progress={progress} />
            </ProgressBar>

            {questions.length > 0 && currentQuestionIndex < questions.length && (
                <QuestionContainer>
                    <h2>{`Q${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].question}`}</h2>
                    <ChoicesContainer>
                        {questions[currentQuestionIndex].choices.map((choice, index) => (
                            <StyledButton
                                key={index}
                                selected={selectedChoice === choice}
                                onClick={() => handleChoiceSelect(choice)}
                                disabled={isAnswering}
                            >
                                {choice}
                            </StyledButton>
                        ))}
                    </ChoicesContainer>
                </QuestionContainer>
            )}

            {animationState && (
                <QuizAnimationComponent isCorrect={animationState === 'correct'} />
            )}
        </QuizWrapper>
    );
};

export default QuizComponent;