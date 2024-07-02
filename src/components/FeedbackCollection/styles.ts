'use client'

import styled, { css, keyframes } from 'styled-components'
import { feedbackData } from '@/data/feedbackData'
const swipe = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);

  }
`
const swipeMobile = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(${feedbackData.length * -100}%);
  }
`

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        max-height: 800px;
        animation: ${swipe} ${feedbackData.length * 0.5}s linear infinite;
        @media (max-width: 768px) {
            animation: ${swipeMobile} ${feedbackData.length * 7}s linear
                infinite;
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
