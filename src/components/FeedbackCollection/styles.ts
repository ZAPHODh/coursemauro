'use client'

import styled, { css, keyframes } from 'styled-components'
import { feedbackData } from '@/data/feedbackData'
const swipe = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(${(feedbackData.length * -100) / 5}vw);

  }
`
const swipeMobile = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(${feedbackData.length * -100}vw);
  }
`

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        animation: ${swipe} ${feedbackData.length * 7}s linear infinite;
        @media (max-width: 768px) {
            animation: ${swipeMobile} ${feedbackData.length * 14}s linear
                infinite;
        }
        @media (min-width: 768px) {
            max-height: 800px;
        }
    `}
`

export const Wrapper = styled.section`
    ${({ theme }) => css`
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: black;
    `}
`
