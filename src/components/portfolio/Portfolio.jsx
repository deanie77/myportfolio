import { useEffect, useState } from 'react'
import { brandingPortfolio, designPortfolio, featuredPortfolio, mobilePortfolio, webPortfolio } from '../../data'
import Portfoliolist from '../portfoliolist/Portfoliolist'
import './portfolio.scss'

export default function Portfolio() {

    const [selected, titleSelected] = useState('featured')
    const [data, setData] = useState([])

    const list = [
        {
            id: 'featured',
            title: 'Featured',
        },
        {
            id: 'web',
            title: 'Web App',
        },
        {
            id: 'mobile',
            title: 'Mobile App',
        },
        {
            id: 'design',
            title: 'Design',
        },
        {
            id: 'branding',
            title: 'Branding',
        },
    ]

    useEffect(() => {

        switch(selected){
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            case 'branding':
                setData(brandingPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <Portfoliolist 
                    title={item.title} 
                    active={selected === item.id} 
                    titleSelected={titleSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="projectCards">
                {data.map(d=>(
                    <div className='container'>
                    <div className='item'>
                        <img src={d.img} alt='' />
                        <h3>{d.title}</h3>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
