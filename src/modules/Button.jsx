
export default function Button ({ children, className, onClick, value, }) {

    return (
        <>
        <button onClick={() => onClick && onClick(value)} className={className}>{children}</button>
        </>
    )
}