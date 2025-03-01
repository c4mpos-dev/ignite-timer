import { styled } from "styled-components";

export const CountdownContainer = styled.div`
    font-family: "Roboto Mono", monospace;
    font-weight: bold;
    
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props) => props.theme["gray-100"]};

    display: flex;
    gap: 1rem;

    span {
        background: ${(props) => props.theme["gray-700"]};
        padding: 2rem 1rem;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        font-size: 7rem;  
        line-height: 6rem;
        gap: 0.8rem; 

        span {
            padding: 1rem 0.5rem; 
        }
    }

    @media (max-width: 480px) {
        font-size: 5rem;
        line-height: 5rem;
        gap: 0.5rem;

        span {
            padding: 0.5rem 0.3rem;
            border-radius: 6px;
        }
    }
`;

export const Separator = styled.div`
    padding: 2rem 0;
    color: ${(props) => props.theme["green-500"]};

    width: 4rem;
    overflow: hidden;

    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        width: 2rem;
        font-size: 4rem;
        padding: 1rem 0;
    }

    @media (max-width: 480px) {
        width: 1.5rem;
        font-size: 2.5rem;
        padding: 0.5rem 0;
    }
`;

