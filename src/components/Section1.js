import Section3 from "./Section3";

function Section1({ theme }) {
    return (
        <div>
            <h2>Section 1</h2>
            <Section3 theme={theme} />
        </div>
    );
}

export default Section1;