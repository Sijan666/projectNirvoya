

const Container = ({children , className}) => {
    return (
        <div className={`lg:w-[1405px] w-[395px] mx-auto ${className}`}>{children}</div>
    )
}

export default Container