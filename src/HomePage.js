import React from 'react'
import reactDom from 'react-dom'
import { Header, Segment } from 'semantic-ui-react'
import './index.css'

import './index.css'
import { NavBar } from './NavBar'

export const HomePage = () => {
    return (
        <div className='font-link'>
            <div style={{textAlign: "center"}}>
                <Segment basic>
                    <Header as='h1'>J. Tyler Papa</Header>
                        <Header as='h2'>Software Developer || UX Designer</Header>
                </Segment>
                <div>
                    
                </div>
            </div>
            <NavBar/>
        </div>
    )
}



