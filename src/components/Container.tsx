interface ContainerProps {
  children: any
  className: string
}

const Container = (props: ContainerProps) => {

  const { className, children } = props

  return (
    <div className={className}>{children}</div>
  )
}

export default Container
