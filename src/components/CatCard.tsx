import React from "react";
import s from "../styles/CatCard.module.css";

interface CatCardProps {
    url: string;
}

export const CatCard: React.FC<CatCardProps> = ({ url }) => {
    return (
        <div className={s.card}>
            <img src={url} alt="Cat" />
        </div>
    );
};
