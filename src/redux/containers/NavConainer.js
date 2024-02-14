import Navbar from '../../components/Navbar'
import { searchData } from '../services/actions/action'
import { Connect, connect } from 'react-redux'

const getSearchData = data=>({
    data:data.search
 })
 const mapDispatchToProps = dispatch=>({
     handleSearchValue:data=>dispatch(searchData(data))
 })
 
 
 export default connect(getSearchData,mapDispatchToProps)(Navbar)