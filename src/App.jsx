import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import UspsSection from "./sections/UspsSection";
import VideoCarousel from "./sections/VideoCarousel";

function App() {
    return (
        <>
            <Header />
            <main>
                <div className="bg-background relative z-10">
                    <HeroSection />
                    <UspsSection />
                </div>
                <VideoCarousel />
                <div className="h-[300vh]" />
            </main>
        </>
    );
}

export default App;
