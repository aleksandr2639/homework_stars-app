import Star from './Star'

type StarsProps = {
   count: number
}
function Stars (props: StarsProps) {
    const { count } = props

    if(!Number.isInteger(count) || count < 1 || count > 5) {
        return
    }
    return(
        <ul className="card-body-stars u-clearfix">
            {[...Array(count)].map((_,i) => <Star key={i} />)}
        </ul>
    )
}
export default  Stars
