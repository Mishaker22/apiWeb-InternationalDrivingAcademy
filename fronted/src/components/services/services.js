import React, { Fragment, useEffect } from 'react'
import MetaData from '../layout/metadata'
import cs_1 from '../../images/cs_1.jpeg'
import cs_2 from '../../images/cs_2.jpeg'
import cs_3 from '../../images/cs_3.jpeg'
import car from '../../images/car.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../actions/services_actions'
import { useAlert } from 'react-alert'

export const Services = () => {
    const { loading, services, error } = useSelector(state => state.services)
    const alert = useAlert();
    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        dispatch(getServices());

    }, [dispatch])

    return (
        <Fragment>
            {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
                <h2 className='quantify text-white'> Loading...</h2>
            </div> : (
                <Fragment>
                    <MetaData title={"services"}></MetaData>
                    <div className='services'>
                        <h2 className='heading' id='txtServices'>Servicios</h2>
                        <div className='containerServices'>
                            
                        </div>
                    </div>
                </Fragment>

            )}

        </Fragment>
    )
}
