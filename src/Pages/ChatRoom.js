import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Send from '@material-ui/icons/Send'
import IconButton from '@material-ui/core/IconButton'
import pattern from '../Assets/pattern.png'
import css from '../chatRoom.css'
import io from 'socket.io-client'

const socket = io('http://192.168.0.17:8000/')

class ChatRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }
    addChatBubble = () => {
        console.log(this.refs)
        let message =  this.refs.message.value
        if (message.trim()) {
            this.refs.overlay.innerHTML += `<div class="chatBubble">${message}</div>`
            socket.emit('message',message)
            document.querySelector('#chatOverlay').scrollTop = document.querySelector('#chatOverlay').scrollHeight
            this.refs.message.value = ''
        }
    }
    componentDidMount(){
        document.querySelector('#chatOverlay').scrollTop = document.querySelector('#chatOverlay').scrollHeight
    }
    render() {
        socket.on('newMessage', (message) => {
            this.refs.overlay.innerHTML += `<div class="chatBubble">${message}</div>`
            document.querySelector('#chatOverlay').scrollTop = document.querySelector('#chatOverlay').scrollHeight
        })
        window.onkeydown = function(e){
            if(e.keyCode == 38){
                document.querySelector('#chatOverlay').scrollTop -=50
            } else if (e.keyCode == 40){
                document.querySelector('#chatOverlay').scrollTop +=50
            }
        }
        const { classes } = this.props
        return (
            <Fragment>
                <div className={classes.send}>
                    <IconButton id="send" onClick={this.addChatBubble} style={{ color: 'white' }}>
                        <Send />
                    </IconButton>
                </div>
                <input ref="message" id="message" style={{ color: 'white' }} placeholder="Type your message here" className={classes.inputbox} />
                <div className={classes.root}>
                    <div className={classes.chatContent}>
                        <div id="chatOverlay" ref="overlay" className={classes.chatOverlay}></div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const styles = (theme) => {
    return ({
        root: {
            paddingTop: 50,
            background: `url(${pattern})`,
            height: '90vh',
            width: '100vw',
            marginLeft: -10,
            marginRight: -10,
            overflow: 'hidden',
        },
        content: {
            position: 'relative',
            height: '100vh',
            width: '100vw'
        },
        background: {
            position: 'absolute',
            zIndex: -1
        },
        overlay: {
            position: 'absolute',
            zIndex: 1
        },
        send: {
            borderRadius: 50,
            minHeight: 50,
            minWidth: 50,
            paddingTop: 3,
            paddingLeft: 4,
            width: 50,
            height: 50,
            position: 'fixed',
            bottom: 0,
            right: 0,
            zIndex: 20,
            margin: 20,
            backgroundColor: '#007bff'
        },
        inputbox: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '65vw',
            padding: 10,
            marginLeft: 20,
            marginRight: 10,
            marginBottom: 25,
            height: 20,
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: 12,
            outline: 'none',
            borderColor: 'transparent',
            fontFamily: 'Roboto'
        },
        chatContent: {
            position: 'fixed',
            top: 60,
            left: 0
        },
        chatBackground: {
            position: 'absolute',
            zindex: -1
        },
        chatOverlay: {
            position: 'absolute',
            width: '100vw',
            zIndex: 1,
            marginTop:10,
            paddingBottom: 10,
            paddingRight: 10,
            paddingLeft: 20,
            maxHeight: '70vh',
            overflow: 'scroll',
            overflowX: "hidden",
            display: 'flex',
            flexDirection: 'column'
        }
    })
}

export default withStyles(styles)(ChatRoom)

