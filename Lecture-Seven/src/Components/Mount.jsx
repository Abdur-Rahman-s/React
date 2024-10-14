import { Component } from "react"
import React from 'react'



// ====== BasicMount
// class BasicMount extends Component {
//     componentDidMount() {
//         console.log('component mounted')
//     }
//     componentWillUnmount() {
//         console.log('component unmounted')
//     }
//     render() {
//         return <div>Hello , I am basic component</div>
//     }
    
// }


// class StateComponent extends Component{
//     constructor(props) {
//         super(props) ;
//         this.state = {
//             deta : 'null',
//         };
//     }
//     componentDidMount() {
//         this.setState({deta : 'hello world'});
//         console.log('component mount will deta fetching')
//     }
//     componentWillUnmount() {
//         console.log('cleaning up before unmount')
//     }
//     render() {
//         return(
//             <>
//                 {this.state.deta}
//                 {this.state.deta}
//             </>
//         )
//     }
// }


// ============== Handling API Calls During Mounting

// class APiComponent extends Component{
//     state = {deta : null};
//     componentDidMount() {
//         this.timer = setTimeout(() => {
//             this.setState({deta : 'Deta  from Api'})
//         }, 2000);
//         console.log('component mount by 2 second left ')
//     }
//     componentWillUnmount() {
//         clearTimeout(this.timer);
//         console.log('component unmounted api clean up')
//     }
//     render() {
//         return(
//             <>

//                 <div>{this.state.deta ? this.state.deta : 'Loading...' }</div>

//             </>
//         )
//     }
// }


// class Resize extends Component{

//     state = {
//         width : window.innerWidth,
//         height : window.innerHeight
//     }

//     componentDidMount() {
//         window.addEventListener('resize' , this.handleResize )
//     }
//     componentWillUnmount() {
//         window.addEventListener('resize' , this.handleResize)
//     }

//     handleResize = ()=> {
//         this.setState({
//             width: window.innerWidth,
//             height: window.innerHeight
//         })
//         console.log('Windion size :' , window.innerWidth , window.innerHeight )
//     }
//     render() {
//         return(
//             <>
//                 <div>
//                     <p>{this.state.height}</p>
//                     <p>{this.state.width}</p>
//                 </div>
//             </>
//         )
//     }
// }


class Theme extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            click : false,
            color : ''
        }
    }
    componentDidMount() {
        let bgColor = {
            
        }
    
    }

    handleInput = (event)=> {
        let mode = event.target.value;
        this.setState({mode : color})
    }
    
    handleClick = ()=> {
        
    }

    render() {
        return(
            <>
                <input type="text" className="inputColor" onChange={this.handleInput} value={this.props.color} />
                {/* <button onClick={} >Change mode</button> */}
            </>
        )
    }
}



// export default Resize;
// export default APiComponent;
// export default  StateComponent;
// export default BasicMount

