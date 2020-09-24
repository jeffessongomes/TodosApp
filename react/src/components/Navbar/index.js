import React from 'react';
import styled from 'styled-components';
import Button from '../MyButton';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faListUl, faUser, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const MyButton = styled(Button)`
    width: 100%;
    background: rgba(255,255,255, 0.5);
    padding: 15px;
    margin-bottom: 3px !important;
    outline: 0;
    border: 0;
    border-radius: 0;
    transition: background,padding 0.3s;
    :hover {
        background: rgba(255, 255, 255, 0.9);
        padding-left: 30px;
    }
`;

const Nav = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    width: 18%;
    // min-height: calc(100vh - 75px);
    position: fixed;
    z-index: 1;
    top: 75px;
    height: 100%;
    padding: 10px;
    float: left;
    button{
        width: 100%;
        margin-bottom: 10px;
        color: #444;
        font-weight: bold;
    }
    .nomeUsuario{
        font-size: 18px;
        padding: 10px 0;
        text-align: center;
        img {
            width: 100px;
            border-radius: 50%;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    }
`;

const LinksBar = styled.div`
    height: 65%;
    overflow: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;

function Navbar(){
    return (
        <>
            <Nav>
                <div className="nomeUsuario">
                    <div>
                        <img src="https://avatars0.githubusercontent.com/u/47510492?s=460&u=83dd9e8b88fafd3f149201ad485c80237dcaba9c&v=4" />
                    </div>
                    <span>
                        Nome usuario
                    </span>
                </div>
                <hr />
                <LinksBar>
                    <Link to="/"><MyButton><FontAwesomeIcon icon={faHome} /> Home</MyButton></Link>
                    <Link to="/todos"><MyButton><FontAwesomeIcon icon={faListUl} /> To-dos</MyButton></Link>
                    <Link to="/"><MyButton><FontAwesomeIcon icon={faUser} /> Profile</MyButton></Link>
                    <Link to="/"><MyButton><FontAwesomeIcon icon={faChartLine} /> Statistics</MyButton></Link>
                    <Link to="/"><MyButton><FontAwesomeIcon icon={faSignOutAlt} /> Sair</MyButton></Link>
                </LinksBar>
            </Nav>
        </>    
    )
}

export default Navbar;