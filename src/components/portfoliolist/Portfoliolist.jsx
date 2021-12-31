import './portfoliolist.scss'

export default function Portfoliolist({id, title, active, titleSelected}) {
    return (
        <li 
            className={active ? 'portfoliolist active' : 'portfoliolist'}
            onClick={() => titleSelected(id)}
        >
            {title}
        </li>
    )
}
