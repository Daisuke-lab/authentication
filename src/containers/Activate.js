import React, { useState }from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions/action'

const Activate = (props) => {
    const [verified, setVerified] = useState(false)
    const verify_account = e => {
        props.verify(props.uid, props.token)
        setVerified(true)
    }
    if (verified) {
        return <Redirect to='/'/>
    }
    return (
    <div className='eontainer mt-5'>
        <div className='d-flex flex-column justify-content-center align-items-center'
        style={{ marginTop: '200px'}}>
            <h1>Verify your account:</h1>
            <button onClick={verify_account}
            style={{marginTop: '50px'}}
            type='button'
            className='btn btn-primary'>Verify</button>
        </div>
    </div>
    )
}

const mapstateToProps = (state, objects) => {
    return {
    isAuthenticated: state.reducer.isAuthenticated,
    uid: objects.match.params.uid,
    token: objects.match.params.token

}
}

const mapDispatchToProps = dispatch => {
    return {
        verify : (uid, token) => dispatch(actions.verify(uid, token))
    }
}
export default connect(mapstateToProps, mapDispatchToProps)(Activate)