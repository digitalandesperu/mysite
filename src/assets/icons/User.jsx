const Users = (props) => (
    <>
        <div className={`inline-block align-middle p-4 rounded-2xl p-2 bg-[#157FB7] bg-gradient-to-b from-[#173251] to-[#242852]  ${props.border}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={props?.width ?? "25px"} height={props?.height ?? "25px"} viewBox="0 0 24 24" {...props}>
                <path fill="none" stroke="#0DA2E8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 20c0-1.742-1.67-3.223-4-3.773M15 20c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-7a4 4 0 0 0 0-8m-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z"></path>
            </svg>
        </div>
    </>
)

export default Users;