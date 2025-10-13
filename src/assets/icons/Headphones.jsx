const Headphones = (props) => (
    <>
        <div className={`inline-block align-middle p-4 rounded-2xl p-2 bg-[#157FB7] bg-gradient-to-b from-[#173251] to-[#242852]  ${props.border}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={props?.width ?? "25px"} height={props?.height ?? "25px"} viewBox="0 0 24 24" {...props}>
                <path fill="none" stroke="#0DA2E8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 14h4q2 0 2 2v4q0 2-2 2H4q-2 0-2-2v-8a1 1 0 0 1 20 0v8q0 2-2 2h-2q-2 0-2-2v-4q0-2 2-2h4"></path>
            </svg>
        </div>
    </>
)

export default Headphones;