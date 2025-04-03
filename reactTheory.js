//! What is React ?
// React is a Js Library, which is used for creating UI for different Application.

import { Component } from "react";

//! Library VS Framework

// Library is the collection of reusable methods, functions etc. But Framework is the collection of multiple libraries.

// In Library, you are in-charge, means you can choose where and when you wants to use the library. But In Framework, framework is in-charge, means it tells you where to put specific part of the code.

// Library :- ReactJs, JQuery etc...
// Framework :- AngularJs, VueJs etc...

//! Features Of React

//? Single Page Application
// In traditional Multipage Applications that loads a new HTML page for each navigation action. React has feature of Single Page Application which means contins only one html file, which dynamically update its content as the user interacts with the App. This result in faster and smoother transitions, providing more app like experience.

//? Declarative
// React is declarative in nature, means instead of telling how to do, you just have to say what to do, and the React will do for you. Simply it means you don't have to specify each and every steps.

//? Virtual Dom
// React uses virtual DOM to update its content. Virtual DOM is the exact replica of the real DOM. Whenever you make any changes, React will creates a new virtual DOM with updated node. And then it compares the newly updated virtual DOM with the preUpdated DOM, it uses Diffing Algorithm for comparision. If it finds any changes then only the updated node is added to the real DOM.

//? Component Based Architecture
// It is a way to build applications, where the whole UI is divided into multiple reusable and independent components.

//? There are 2 types of Components:- Functional Component and Class Component

//          Class Based Component                           Functional Component
//              JS Classes                                      JS Functions
//              StateFull                                       StateLess
//              No Hooks                                        Hooks
//              LifeCycleMethods                                No LifeCycleMethods
//              this keyword                                    No this keyword
//              render method                                   No render method

//? Class Based Components

class CBC extends Component {
    render(){
        return (
            <div>

            </div>
        )
    }
}


//? Function Based Component

const FBC = () => {
    return (
        <div>
        </div>
    )
}