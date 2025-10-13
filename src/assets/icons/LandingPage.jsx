export const WindowFrameLinear = (props) => (
  <>
    <div className="inline-block align-middle p-4 rounded-2xl p-2 bg-[#157FB7] bg-gradient-to-br from-cyan-500 to-[#724ECF]">
      <svg xmlns="http://www.w3.org/2000/svg" width={props?.width ?? "1em"} height={props?.height ?? "1em"} viewBox="0 0 24 24" {...props}>
        <g fill="none">
          <path
            stroke="#FFFFFF"
            strokeWidth="1.5"
            d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
          ></path>
          <path fill="#FFFFFF" d="M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></path>
          <path stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5" d="M2 9.5h20M9 21V10"></path>
        </g>
      </svg>
    </div>
  </>
);
export default WindowFrameLinear;
