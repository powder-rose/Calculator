
export default function Field(props) {
    const { className, onInput, value } = props;

    return (
        <>
            <input value={value} onInput={onInput} className={className} />
        </>
    );
}
