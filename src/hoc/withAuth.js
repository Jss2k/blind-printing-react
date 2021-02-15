import { useAuth } from './../customHooks/customHooks'

const WithAuth = props => useAuth(props) && props.children

export default WithAuth