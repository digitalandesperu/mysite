
const Pallete2Linear = (props) => {
    return (
        <>
            <div className={`inline-block align-middle p-4 rounded-2xl p-2 bg-[#157FB7] bg-gradient-to-b from-[#173251] to-[#242852]  ${props.border}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width={props?.width ?? "25px"} height={props?.height ?? "25px"} viewBox="0 0 24 24" {...props}>
                    <g fill="none" stroke="#0DA2E8" strokeWidth="1.5">
                        <path d="M2 12.026c0 5.146 3.867 9.387 8.847 9.96c.735.085 1.447-.228 1.97-.753a1.68 1.68 0 0 0 0-2.372c-.523-.525-.95-1.307-.555-1.934c1.576-2.508 9.738 3.251 9.738-4.9C22 6.488 17.523 2 12 2S2 6.489 2 12.026Z"></path>
                        <circle cx="17.5" cy="11.5" r=".75"></circle>
                        <circle cx="6.5" cy="11.5" r=".75"></circle>
                        <path d="M10.335 7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm4.915 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"></path>
                    </g>
                </svg>
            </div>
        </>
    )
};

export default Pallete2Linear;

