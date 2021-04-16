import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
     const location = useLocation()
    return (
        <header className='header'>
            <h1 className="title">{title}</h1>
            { location.pathname === '/' && (<Button color= {showAdd ?  ' #b2c2bf ': '#c0ded9'} text = {showAdd ? 'Close' : "Add"} onClick={onAdd}/>)}
        </header>
            
        
    )
}
Header.defaultProps = {
    title: 'Task-Manager',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
