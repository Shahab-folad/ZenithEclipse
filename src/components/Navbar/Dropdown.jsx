import react from 'react';
import './navbar.css';

const Dropdown = () =>{
    return(
        <>
            <div className="productLIst">
                <ul className="productList-item flex justify-evenly">
{/****************************************************************************/}
                    <li className="m-2 p-l-item-a">
                        <a href="/grains" >
                            GRAINS
                        </a>
                    </li>
{/****************************************************************************/}
                    <li className='plus'>+</li>
                    <li className="m-2 p-l-item-a">
                        <a href="/lentils">
                            LENTILS
                        </a>
                    </li>
{/****************************************************************************/}
                    <li className='plus'>+</li>
                    <li className="m-2 p-l-item-a">
                        <a href="/seeds">
                            SEEDS
                        </a>
                    </li>
{/****************************************************************************/}
                    <li className='plus'>+</li>
                    <li className="m-2 p-l-item-a">
                        <a href="/meals">
                            MEALS (ANIMAL FEEDS)
                        </a>
                    </li>
{/****************************************************************************/}
                    <li className='plus'>+</li>
                    <li className="m-2 p-l-item-a">
                        <a href="/productions">
                            PRODUCTIONS
                        </a>
                    </li>
{/****************************************************************************/}
                    <li className='plus'>+</li>
                    <li className="m-2 p-l-item-a">
                        <a href="/petrochemical-products">
                        PETROCHEMICAL PRODUCTS
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Dropdown;