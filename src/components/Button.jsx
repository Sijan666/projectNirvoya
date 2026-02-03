

const Button = ({btnText , className}) => {
    return (
        <button className={`bg-[#0198E9] rounded-[5px] ${className} cursor-pointer`}>{btnText}</button>
    )
}

export default Button