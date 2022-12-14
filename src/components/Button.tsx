interface ButtonProps {
  text: string
  className?: string
  onClick: () => void
}

const Button = (props: ButtonProps) => {

  const { text, className, onClick } = props

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
