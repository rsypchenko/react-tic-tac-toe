interface Props {
	value: string
	onClick:any
}

export const Square = ({value, onClick}: Props) => (
	<button className={`border-2 text-3xl outline-none box-border`} onClick={onClick}>{value}</button>
);