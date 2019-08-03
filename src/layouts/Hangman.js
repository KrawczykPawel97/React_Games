import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Hangman.css';
import Keyboard from "../components/hangman/Keyboard";
import Image from "../components/hangman/Image";
import Password from "../components/hangman/Password";
import Start from "../components/hangman/Start"
import Alert from "../components/Alert";

class Hangman extends React.Component {
   state = {
       start: true,
       stepNumber: 0,
       password: ``,
       category: ``,
       hiddenPassword: '',
   };

   title = '';
   body = '';

    replaceAt(string, index, replace) {
        return string.substring(0, index) + replace + string.substring(index + 1);
    }

    restart(){
        this.setState({
            start: 1,
            stepNumber: 0,
            password: ``,
            category: ``,
            hiddenPassword: '',
        });
        this.title = '';
        this.body = '';
    }


    handleClick(i) {
        const letter = document.getElementById(i).textContent;
        const password = this.state.password;
        let step = this.state.stepNumber;
        let hidden = this.state.hiddenPassword;
        let checkChange = hidden;
        for(let counter = 0; counter < password.length; counter++){
            if (password[counter] === letter)
                {hidden = this.replaceAt(hidden, counter, letter)}
            }
        if(hidden === checkChange){step++}
        this.setState({
            hiddenPassword: hidden,
            stepNumber: step,
        });

        if(this.state.stepNumber === 9){
            this.title = 'I\'m sorry';
            this.body = 'You could not guess the password: ' + this.state.password;
            this.setState({start: false})
        }

        if(password === hidden){
            this.setState({start: false});
            this.title = 'Congratulations';
            this.body = 'You guessed the password, Excellent!';
        }
    }

    render(){
        const clickStart = () => {
            const category = document.getElementById('category').value;
            const password = document.getElementById('password').value;
            let curtained = "";
            for(let counter = 0; counter < password.length; counter++){
                if(password.charAt(counter)===" ") {curtained += " "}
                else {curtained+="-"}
            }
            const lowerPassword = password.toLowerCase();
            this.setState({
                category: category,
                password: lowerPassword,
                hiddenPassword: curtained
            });

        };
    return(
        <React.Fragment>
            { this.state.start === false ?
                <Alert title = {this.title}
                       body = {this.body}
                       onClick={() => {this.restart()}}
                />
              :
                    this.state.password === `` ?
            <Start onClick = {clickStart}/>
            :
            <div>
                <div className={'row'}>
                    <div className={'col-4 col-sm-4 col-md-4'}>
                        <Image stepNumber={this.state.stepNumber}/>
                    </div>
                    <div className={'col-8 col-sm-8 col-md-8'}>
                        <Password category = {this.state.category}
                                  value = {this.state.hiddenPassword}
                        />
                        <Keyboard onClick={(i) => this.handleClick(i)}
                        />
                    </div>

                </div>
            </div>
                }
        </React.Fragment>
    )}
}
export default Hangman;