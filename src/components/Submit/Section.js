function Section({type, val, handleChange, max}) {
    return (
        <section>
            <h1>{type}</h1>
            <input type='text' value={val} onChange={handleChange} placeholder={`${type}을(를) 입력해주세요. (${max}자 이내)`}/>
        </section>
    )
}

export default Section;