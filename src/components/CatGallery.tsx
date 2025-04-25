import "../styles/CatGallery.scss";
import { CatCard } from "./CatCard";

export const CatGallery = ({ cats }: { cats: string[] }) => (
    <div className="gallery">
        {cats.map((cat, i) => (
            <CatCard key={i} url={cat} />
        ))}
    </div>
);
