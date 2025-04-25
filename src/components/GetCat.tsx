// src/components/LoadMoreButton.tsx
import styled from "styled-components";

const Button = styled.button`
    display: block;
    margin: 2rem auto;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
`;

interface GetCatButtonProps {
    onClick: () => void;
}

export const GetCat: React.FC<GetCatButtonProps> = ({ onClick }) => (
    <Button onClick={onClick}>Get cat</Button>
);
