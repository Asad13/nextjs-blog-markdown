const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const FormattedDate = ({dateString })=> {
    const date = new Date(dateString);
    const formattedDate = `${months[date.getMonth()]} ${date.getDate()},${date.getFullYear()}`
    return (
        <time dateTime={dateString ?? ""} className="inline-block py-1 px-4 bg-slate-200 rounded-2xl text-sm">
            {formattedDate ?? ''}
        </time>
    )
}

export default FormattedDate;