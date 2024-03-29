import React from "react";
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component{
    state = {
        options : [],
        selectedOption: undefined
    };
    
    handleDeleteOptions = ()=>{
        this.setState(() =>({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optionToRemove!==option)
        }));
    }
    handlePick = () =>{
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
        this.setState(()=>({
            selectedOption:option
        }));
    }
    handleAddOption = (option) => {
        
        if(!option){
            return "Enter valid value to add item";
        }else if(this.state.options.indexOf(option)>-1){
            return "This option already exists";
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}));
    }
    clearSelectedOption = () => {
        this.setState(()=>({selectedOption:undefined}));
    }
    componentDidMount = () => {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options)
                this.setState(()=>({options}));
        }catch(e){
            //Do nothing at all
        }
        
    }
    componentDidUpdate = (prevProps,prevState) => {
        if(prevState.options.length!==this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
        // console.log('componentDidUpdate');
    }
    componentWillUnmount = () =>{
        console.log('ComponentWillUnmount');
    }
    render(){
        const title='Indecision';
        const subtitle ='Put your life in the hands of a computer';
        
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length>0} 
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}    
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    
                </div>
                
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.clearSelectedOption}
                />
            </div>
        );
    }
}