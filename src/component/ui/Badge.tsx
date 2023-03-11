import { cva } from "class-variance-authority"
import { FC } from "react"

type BadgeProps = {
	intent: "primary" | "secondary" | "success" | "warning" | "danger" | "info"
	text: string
}

const badgeStyles = cva(
	"whitespace-nowrap select-none inline-flex justify-center items-center font-bold text-sm px-2 py-1 rounded-full",
	{
		variants: {
			intent: {
				primary: "bg-blueDark-6 text-blueDark-11",
				secondary: "bg-grayDark-6 text-grayDark11",
				success: "bg-greenDark-6 text-greenDark-11",
				warning: "bg-orangeDark-6 text-orangeDark-11",
				danger: "bg-redDark-6 text-redDark-11",
				info: "bg-cyanDark-6 text-cyanDark-11",
			},
		},
	},
)

const Badge: FC<BadgeProps> = ({ intent, text }) => {
	const className = badgeStyles({ intent })

	return <span className={className}>{text}</span>
}

export default Badge
