type CardProps = {
    title: string,
    paragraph: string
}

export const Card = ({ title, paragraph }: CardProps) => <aside>
    <span>{ title }</span> <span>{ paragraph }</span>
</aside>
