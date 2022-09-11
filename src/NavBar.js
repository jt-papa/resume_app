import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faHome } from "@fortawesome/free-solid-svg-icons";
import './navBar.css'

export const NavBar = () => {

    return(

        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '44px', height: '850px', color: 'black', marginLeft: '45px', marginTop: '50px', position: 'fixed', top: '0px'}}>
            <FontAwesomeIcon icon={faHome} />
            <div style={{writingMode: 'vertical-rl', textOrientation: 'sideways', transform: 'rotate(180deg)', marginTop: '25px', fontSize: '18px'}}>Development</div>
            <div style={{writingMode: 'vertical-rl', textOrientation: 'sideways', transform: 'rotate(180deg)', marginTop: '25px', fontSize: '18px'}}>Design</div>
            <div style={{writingMode: 'vertical-rl', textOrientation: 'sideways', transform: 'rotate(180deg)', marginTop: '25px', fontSize: '18px'}}>About Me</div>
            <FontAwesomeIcon icon={faAdjust} />
        </nav>




    //     <Grid>
    //     <Grid.Row>
    //         <Icon home name='home' />
    //     </Grid.Row>
    //     <Grid.Row style={{class: 'rotated'}}>
    //       <Grid.Column>Web Development</Grid.Column>
    //     </Grid.Row>
    //     <Grid.Row>
    //       <Grid.Column>Design</Grid.Column>
    //     </Grid.Row>
    //     <Grid.Row>
    //       <Grid.Column>About Me</Grid.Column>
    //     </Grid.Row>
    //     <Grid.Row>
    //       <Grid.Column>
    //           <Icon moon name='moon' />
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>








        // <Menu vertical>
        //     <Menu.Item style={{transform: [{ rotate: '90deg' }]}}
        //         name='Home'
        //     />
        //     <Menu.Item style={{transform: [{ rotate: '90deg' }]}}
        //         name='Web Development'
        //     />
        //     <Menu.Item style={{transform: [{ rotate: '90deg' }]}}
        //         name='Design'
        //     />
        //     <Menu.Item style={{transform: [{ rotate: '90deg' }]}}
        //         name='About Me'
        //     />
        //     <Menu.Item style={{transform: [{ rotate: '90deg' }]}}
        //         name='Switch'
        //     />
        // </Menu>
    )

}