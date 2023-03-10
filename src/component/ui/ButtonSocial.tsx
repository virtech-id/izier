import * as Toolbar from "@radix-ui/react-toolbar"
import { cva } from "class-variance-authority"
import { FC } from "react"

type ButtonSocialProps = {
	social?: "google" | "github" | "facebook" | "twitter" | undefined
	onClick?: () => void
	children: React.ReactNode
	fullWidth?: boolean
}

const buttonSocialStyles = cva(
	"inline-flex justify-center items-center font-medium rounded-md px-4 py-2 text-sm transition duration-300 ease-in-out",
	{
		variants: {
			social: {
				google: "bg-whiteA-12 text-grayDark-1 hover:bg-whiteA-10",
				github: "bg-grayDark-5 text-whiteA-12 hover:bg-whiteA-10",
				facebook: "bg-blueDark-5 text-whiteA-12 hover:bg-whiteA-10",
				twitter: "bg-skyDark-5 text-whiteA-12 hover:bg-whiteA-10",
			},
			fullWidth: {
				true: "w-full",
			},
		},
	},
)

const ButtonSocial: FC<ButtonSocialProps> = ({
	social,
	onClick,
	children,
	fullWidth,
}) => {
	const className = buttonSocialStyles({ social, fullWidth })

	return (
		<Toolbar.Root>
			<Toolbar.Button className={className} type="button" onClick={onClick}>
				{children}
			</Toolbar.Button>
		</Toolbar.Root>
	)
}

export default ButtonSocial
