// src/App.tsx
import { useEffect, useState } from "react";
import { fetchCats } from "./api/catApi";
import { Header } from "./components/Header";
import { CatGallery } from "./components/CatGallery";
import { GetCat } from "./components/GetCat";
import styled from "styled-components";

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

function App() {
    const [cats, setCats] = useState<string[]>([]);

    const loadCats = async (limit: number) => {
        const newCats = await fetchCats(limit);
        setCats(newCats);
    };

    useEffect(() => {
        loadCats(1);
    }, []);

    return (
        <Wrapper>
            <Content>
                <Header />
                <CatGallery cats={cats} />
                <GetCat onClick={() => loadCats(1)} />
            </Content>
        </Wrapper>
    );
}

export default App;
