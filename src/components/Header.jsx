import Button from "./Button";
import Container from "./Container";

function Header() {
    return (
        <>
            <header className="bg-backgroundContrast text-white relative z-20">
                <Container className="flex items-center min-h-[--header-row-height]">
                    <a href="/" className="h-[--header-row-height] flex items-center px-6 -ml-6 text-xl">
                        ⚪<span className="sr-only">Back to homepage</span>
                    </a>
                </Container>
            </header>
            <div className="sticky top-0 z-20 bg-backgroundContrast text-white">
                <Container className="flex justify-between items-center min-h-[--header-row-height]">
                    <p className="text-xl font-semibold">Apple TV+</p> 
                    <Button size="small">Stream now</Button>
                </Container>
            </div>
        </>
    );
}

export default Header;
