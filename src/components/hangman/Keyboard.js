import React, { Component } from 'react';
import Button from './Button';

export default class Keyboard extends Component {
    renderButton(i, letter){
        return <Button id= {i}
                       onClick={()=>this.props.onClick(i)}
                       letter = {letter}
        />
    }
    render() {
        return (
            <div>
                <div className="row">
                    {this.renderButton(0,'q')}
                    {this.renderButton(1,'w')}
                    {this.renderButton(2,'e')}
                    {this.renderButton(3,'r')}
                    {this.renderButton(4,'t')}
                    {this.renderButton(5,'y')}
                    {this.renderButton(6,'u')}
                    {this.renderButton(7,'i')}
                    {this.renderButton(8,'o')}
                    {this.renderButton(9,'p')}
                </div>
                <div className="row">
                    {this.renderButton(10,'a')}
                    {this.renderButton(11,'s')}
                    {this.renderButton(12,'d')}
                    {this.renderButton(13,'f')}
                    {this.renderButton(14,'g')}
                    {this.renderButton(15,'h')}
                    {this.renderButton(16,'j')}
                    {this.renderButton(17,'k')}
                    {this.renderButton(18,'l')}
                </div>
                <div className="row">
                    {this.renderButton(19,'z')}
                    {this.renderButton(20,'x')}
                    {this.renderButton(21,'c')}
                    {this.renderButton(22,'v')}
                    {this.renderButton(23,'b')}
                    {this.renderButton(24,'n')}
                    {this.renderButton(25,'m')}
                </div>
                <div className="row">
                    {this.renderButton(26,'ą')}
                    {this.renderButton(27,'ć')}
                    {this.renderButton(28,'ę')}
                    {this.renderButton(29,'ł')}
                    {this.renderButton(30,'ń')}
                    {this.renderButton(31,'ó')}
                    {this.renderButton(32,'ś')}
                    {this.renderButton(33,'ź')}
                    {this.renderButton(34,'ż')}
                </div>
            </div>
        )
    }
}